import { z } from 'zod';

export const registerUserSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(4, 'Name must be at least 4 characters')
    .max(40, 'Pura khaandaan ka naam likhega kya!'),
  email: z
    .string()
    .email({ message: 'invalid email given' })
    .max(50, 'Too long email!'),
  image: z.string().optional().nullable(),
  password: z.string()
});

export const loginUserSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid Email' })
    .min(10, 'MUgi ali tlamo email de')
    .max(500, 'mugi yeti lamo ni hoinw k'),
  password: z.string()
});

export const logoutUserSchems = z.object({
  password: z.string(),
  id: z.string()
});
export const productsSchems = z.object({
  category: z.string(),
  image: z.string().optional()
});
