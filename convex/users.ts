// convex/users.ts
import { mutation, query } from 'convex/server';

// Create a new user
export const createUser = mutation(async ({ db }, { userId, name, email }: { userId: string, name: string, email: string }) => {
  const userExists = await db.query("users").filter(q => q.eq("userId", userId)).first();
  if (userExists) {
    throw new Error("User already exists");
  }
  await db.insert("users", { userId, name, email });
});

// Retrieve a user profile by userId
export const getUserProfile = query(async ({ db }, { userId }: { userId: string }) => {
  return await db.query("users").filter(q => q.eq("userId", userId)).first();
});

// Update user profile
export const updateUserProfile = mutation(async ({ db }, { userId, name, email }: { userId: string, name: string, email: string }) => {
  await db.update("users", { userId }, { name, email });
});

// Delete user
export const deleteUser = mutation(async ({ db }, { userId }: { userId: string }) => {
  await db.delete("users", { userId });
});
