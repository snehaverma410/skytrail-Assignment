"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { likeBlog } from "@/lib/actions"

interface LikeButtonProps {
  blogId: string
  initialLikes: number
  initialLiked: boolean
}

export function LikeButton({ blogId, initialLikes, initialLiked }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(initialLiked)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleLike = async () => {
    setIsLoading(true)

    try {
      const newLiked = !liked
      const newLikes = await likeBlog(blogId, newLiked)

      setLiked(newLiked)
      setLikes(newLikes)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update like status. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={`gap-1 ${liked ? "text-red-500" : ""}`}
      onClick={handleLike}
      disabled={isLoading}
    >
      <Heart className={`h-4 w-4 ${liked ? "fill-red-500" : ""}`} />
      <span>{likes}</span>
    </Button>
  )
}

