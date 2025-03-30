import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Travel Tales</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Travel Tales was created by Sneha Verma, a passionate traveler and web developer who believes in the power
            of storytelling to connect cultures and inspire exploration.
          </p>
          <p className="mb-4">
            What started as a personal blog to document travels across continents has evolved into a platform that
            combines authentic travel narratives with rich cultural information.
          </p>
          <p>
            Each blog post is carefully crafted to not only share personal experiences but also provide valuable
            insights about the countries visited, helping readers plan their own adventures or simply explore the world
            from home.
          </p>
        </div>
        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
          <Image src="/images/amboseli.png" alt="Travel scene" fill className="object-cover" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Meet the Creator</h2>

      <Card className="max-w-2xl mx-auto mb-12">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative h-40 w-40 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=200" alt="Sneha Verma" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Sneha Verma</h3>
              <p className="text-muted-foreground mb-1">Travel Writer & Web Developer</p>
              <p className="mb-4">
                Sneha has visited over 20 countries across 5 continents, always seeking authentic experiences and
                connections with local cultures. When not traveling, she's coding and building digital experiences that
                bring travel stories to life.
              </p>
              <p>
                "I believe travel is the best education. It teaches empathy, adaptability, and appreciation for the
                beautiful diversity of our world."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto">
          To inspire curiosity about the world through authentic travel narratives, provide cultural context that
          fosters understanding, and create a community of responsible travelers who appreciate both the beauty and
          complexity of the places they visit.
        </p>
      </div>
    </main>
  )
}

