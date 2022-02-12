import { Field, InputType } from "type-graphql";

@InputType()
export class Test {
  @Field((_type) => String)
  test: string;
}
