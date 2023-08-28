import * as zod from "zod";

const { object, string } = zod;
export const UserValidation = object({
  profile_photo: string().url().nonempty(),
  name: string().min(3).max(30),
  username: string().min(3).max(30),
  bio: string().min(3).max(1000),
});
