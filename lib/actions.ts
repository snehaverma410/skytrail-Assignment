"use server"

import { revalidatePath } from "next/cache"
import type { Comment } from "./types"

// Mock function to add a comment
export async function addComment(blogId: string, content: string): Promise<Comment> {
  // In a real app, this would be a database operation
  const newComment: Comment = {
    id: `c${Date.now()}`,
    blogId,
    author: "Sneha Verma", // Changed from 'Guest User' to 'Sneha Verma'
    avatar: "/placeholder.svg?height=100&width=100",
    content,
    date: new Date().toISOString(),
  }

  // Revalidate the blog page to show the new comment
  revalidatePath(`/blog/${blogId}`)

  return newComment
}

// Mock function to like/unlike a blog
export async function likeBlog(blogId: string, liked: boolean): Promise<number> {
  // In a real app, this would be a database operation
  // For now, we'll just return a mock number of likes
  const likesChange = liked ? 1 : -1
  const newLikes = Math.floor(Math.random() * 200) + likesChange

  // Revalidate the blog page to show the updated likes
  revalidatePath(`/blog/${blogId}`)

  return newLikes
}

