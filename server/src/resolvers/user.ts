import { User } from "../entities/User";
import { Arg, Mutation } from "type-graphql";
import { Entity } from "typeorm";
import argon2 from "argon2";
import { UserMutationResponse } from "../types/UserMutationResponse";

@Entity()
export class UserResolver{
    @Mutation(_returns => UserMutationResponse, { nullable: true })
    async register(
        @Arg('email') email: string,
        @Arg('password') password: string,
        @Arg('username') username: string
    ) : Promise <UserMutationResponse> {

        try {
            const existingUser = await User.findOne({
                //find username or email => find 
                where: [{ username }, {email}]
            })
            if (existingUser) {
                return    {
                    code: 400,
                    success: false,
                    message: 'Duplicate username or email',
                    errros: [
                        {
                            field: (existingUser.username === username) ? 'username' : 'email',
                            message: (existingUser.username === username ? `username` : `email`) + '  already taken'
                        }
                    ]
                }
            } 
            
            const hashedPass = await argon2.hash(password)
            const newUser = User.create({
                username, password: hashedPass, email
            })
            return {
                code: 200,
              
                success: true,
                message: 'User registration successful',
                user: await User.save(newUser)
            }
        } catch (error) {
            console.log(error)
            return    {
                code: 500,
                success: false,
                message: `Internal server error ${error.message}`
            }
        }
    }
}

