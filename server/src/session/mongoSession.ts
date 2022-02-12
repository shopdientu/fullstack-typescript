import MongoStore from "connect-mongo";
import session from "express-session";
import { FieldStoreMongo } from "../mongoDB/fieldStoreMongo";

export const createSessionMongo = ({
  name,
  mongoUrl,
  maxAge,
  _prop_,
  secret,
}: FieldStoreMongo) => {
  console.log("create session mongo");
  return session({
    name,
    store: MongoStore.create({ mongoUrl }),
    cookie: {
      maxAge,
      httpOnly: true, // front-end can't not access the cookie
      secure: _prop_, // cookie only works in https
      sameSite: "lax", // protection against CSRF
    },
    secret,
    saveUninitialized: false, //don't save empty session, right from start
    resave: false,
  });
};
