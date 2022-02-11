import { Test } from "../entities/Test";
import { createConnection } from "typeorm";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

export const connectPostgresDB = async (
  username?: string,
  password?: string,
  database?: string
) => {
  await createConnection({
    type: "postgres",
    database,
    username,
    password,
    logging: true,
    synchronize: true,
    entities: [User, Post, Test],
  });

  console.log("connected postgresDB");
};
