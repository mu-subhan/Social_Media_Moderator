// convex/comments.ts
import { mutation, query } from 'convex/server';

// Add a comment to a post
export const addComment = mutation(async ({ db }, { postId, userId, comment }) => {
  await db.insert("comments", { postId, userId, comment, createdAt: Date.now() });
});

// Get comments for a post
export const getCommentsForPost = query(async ({ db }, { postId }) => {
  return await db.query("comments").filter(q => q.eq("postId", postId)).order("asc", "createdAt").collect();
});
