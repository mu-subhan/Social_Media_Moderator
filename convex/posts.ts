// convex/posts.ts
import { mutation, query } from 'convex/server';

// Create a new post
export const createPost = mutation(async ({ db }, { userId, content }) => {
  await db.insert("posts", { userId, content, createdAt: Date.now() });
});

// Get all posts
export const getAllPosts = query(async ({ db }) => {
  return await db.query("posts").order("desc", "createdAt").collect();
});

// Get posts by userId
export const getPostsByUser = query(async ({ db }, { userId }) => {
  return await db.query("posts").filter(q => q.eq("userId", userId)).order("desc", "createdAt").collect();
});

// Delete a post
export const deletePost = mutation(async ({ db }, { postId }) => {
  await db.delete("posts", { postId });
});
