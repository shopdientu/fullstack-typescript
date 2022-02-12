require("dotenv").config();
import "reflect-metadata";
import express from "express";
import { connectMongo } from "./mongoDB/connect";
import { connectApolloServer } from "./apollo/connect";
import { connectPostgresDB } from "./postgresDB/connect";
import { createSessionMongo } from "./session/mongoSession";
import { COOKIE_NAME, __prop__ } from "./constants";

const main = async () => {
  const app = express();
  const port = process.env.PORT || 5000;

  // Connect PostgresDB
  await connectPostgresDB(
    process.env.POSTGRES_USERNAME,
    process.env.POSTGRES_PASS,
    process.env.POSTGRES_DB_NAME
  );

  // Connect mongoDB
  await connectMongo(process.env.MONGO_URI || "");

  // Create Session and Cookie in client  --  save in MongoDb
  app.use(
    createSessionMongo({
      maxAge: 60 * 60 * 1000 * 24 * 30,
      name: COOKIE_NAME,
      _prop_: __prop__,
      mongoUrl: process.env.MONGO_URI as string,
      secret: process.env.SESSION_SECRET as string,
    })
  );

  //Start server Apollo
  await connectApolloServer(app);

  //Start server
  app.listen(port, async () => {
    console.log(`Server started on port  ${port}`);
  });
};

main().catch((err) => console.log(err));
