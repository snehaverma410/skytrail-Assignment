import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CommentSection } from "@/components/comment-section"
import { LikeButton } from "@/components/like-button"
import { CountryInfo } from "@/components/country-info"
import { fetchBlogById } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"

interface BlogPageProps {
  params: {
    id: string
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await fetchBlogById(params.id)

  if (!blog) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-sm">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to blogs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[400px] w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={blog.coverImage || `/placeholder.svg?height=800&width=1200`}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{formatDate(blog.date)}</span>
              </div>
            </div>
            <LikeButton blogId={blog.id} initialLikes={blog.likes} initialLiked={blog.liked} />
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            {blog.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <Separator className="my-8" />

          <CommentSection blogId={blog.id} comments={blog.comments} />
        </div>

        <div>
          <CountryInfo countryCode={blog.countryCode} />

          <Card className="p-4 mt-6">
            <h3 className="font-medium mb-2">About the Author</h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image src={`/placeholder.svg?height=100&width=100`} alt="Sneha Verma" fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium">Sneha Verma</p>
                <p className="text-sm text-muted-foreground">Travel Writer & Developer</p>
              </div>
            </div>
            <p className="text-sm">
              Passionate traveler, storyteller, and web developer, sharing experiences from around the world through
              code and narrative.
            </p>
          </Card>
        </div>
      </div>
    </main>
  )
}

