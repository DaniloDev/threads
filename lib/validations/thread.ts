import * as zod from "zod";

const { object, string } = zod;

export const ThreadValidation = object({
  thread: string().nonempty().min(3, { message: "Minimim 3 chacacters" }),
  accountId: string(),
});

export const CommentValidation = object({
  thread: string().nonempty().min(3, { message: "Minimim 3 chacacters" }),
});
