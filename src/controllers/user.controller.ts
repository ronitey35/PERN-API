import { handleAsync } from '@/middlewares/handle-async';
import {
  loginUserSchema,
  logoutUserSchems,
  registerUserSchema
} from '@/dtos/user.dto';
import { db } from '@/config/database';
import { users } from '@/schema/user.schema';
import { and, eq } from 'drizzle-orm';
import { BadRequestException } from '@/lib/exceptions';

export const registerUser = handleAsync(async (req, res) => {
  const data = registerUserSchema.parse(req.body);
  const [userExists] = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email));

  if (userExists) {
    throw new BadRequestException('User with same email already exists!');
  }

  const [createdUser] = await db
    .insert(users)
    .values(data)
    .returning({ id: users.id });
  return res.json({ user: createdUser });
});

export const loginUser = handleAsync(async (req, res) => {
  const data = loginUserSchema.parse(req.body);
  const [loggedUser] = await db
    .select()
    .from(users)
    .where(and(eq(users.email, data.email), eq(users.password, data.password)))

});

export const deleteUser = handleAsync(async (req, res) => {
  const data = logoutUserSchems.parse(req.body);
  const [logOutUser] = await db
    .select()
    .from(users)
    .where(eq(users.id, data.id));
  return res.json({ message: 'Logged out successfully' });
});
