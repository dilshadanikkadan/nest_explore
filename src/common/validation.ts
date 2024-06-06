import { z } from 'zod';

export const createUserSchema = z
  .object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
  })
  .required();

export type CreateCatDto = z.infer<typeof createUserSchema>;