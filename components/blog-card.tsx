import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { Blog } from "@/lib/types"

interface BlogCardProps {
  blog: Blog
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={blog.coverImage || `/placeholder.svg?height=400&width=600`}
            alt={blog.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-1.5">
            <Image
              src={blog.countryFlag || "/placeholder.svg"}
              alt={blog.country}
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg line-clamp-1">{blog.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{formatDate(blog.date)}</p>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm line-clamp-3">{blog.excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-muted-foreground">
          <span>{blog.author}</span>
          <div className="flex items-center gap-1">
            <Heart size={16} className={blog.liked ? "fill-red-500 text-red-500" : ""} />
            <span>{blog.likes}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

