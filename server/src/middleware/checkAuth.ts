import { AuthenticationError } from "apollo-server-core";
import { Context } from "../types/Context";
import { MiddlewareFn } from "type-graphql";

export const checkAuth: MiddlewareFn<Context> = (
  { context: { req } },
  next
) => {
  if (!req.session.userId) {
    throw new AuthenticationError(
      "Not authentication to perform Graphql operation 1111"
    );
  }

  return next();
};
