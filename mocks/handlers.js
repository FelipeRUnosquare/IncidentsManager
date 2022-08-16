import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000", (req, res, ctx) => {
    return;
  }),
];
