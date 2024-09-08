// convex/likes.ts
import { mutation, query } from 'convex/server';

// Like a post
export const likePost = mutation(async ({ db }, { postId, userId }) => {
  const likeExists = await db.query("likes").filter(q => q.eq("postId", postId).eq("userId", userId)).first();
  if (!likeExists) {
    await db.insert("likes", { postId, userId });
  }
});

// Unlike a post
export const unlikePost = mutation(async ({ db }, { postId, userId }) => {
  await db.delete("likes", { postId, userId });
});

// Get likes for a post
export const getLikesForPost = query(async ({ db }, { postId }) => {
  return await db.query("likes").filter(q => q.eq("postId", postId)).collect();
});
