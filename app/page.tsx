import { BlogCard } from "@/components/blog-card"
import { SearchBar } from "@/components/search-bar"
import { fetchBlogs } from "@/lib/data"

export default async function Home() {
  const blogs = await fetchBlogs()

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-center mb-2">Travel Tales</h1>
        <p className="text-center text-muted-foreground mb-8">Explore the world through Sneha Verma's travel stories</p>
        <SearchBar />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>
    </main>
  )
}

