import type { Blog } from "./types"

// Mock data for the blog
const mockBlogs: Blog[] = [
  {
    id: "1",
    title: "Exploring the Ancient Temples of Japan",
    excerpt:
      "A journey through the spiritual heart of Japan, visiting ancient temples and experiencing traditional culture.",
    content: `Japan's ancient temples are windows into a world where spirituality, art, and nature blend seamlessly. My journey began in Kyoto, the cultural capital of Japan and home to over 1,600 Buddhist temples and 400 Shinto shrines.

The first stop was Kinkaku-ji, the Golden Pavilion. As I approached through the meticulously maintained gardens, the temple's gold-leaf covered exterior reflected brilliantly in the surrounding pond. Built originally in 1397 as a retirement villa for Shogun Ashikaga Yoshimitsu, it was later converted into a Zen temple. Despite being burned down several times throughout history, most recently in 1950, it has always been rebuilt true to its original design.

Next was Fushimi Inari Taisha, famous for its thousands of vermilion torii gates that create tunnels along the hiking trails of Mount Inari. The shrine is dedicated to Inari, the Shinto god of rice, and foxes are thought to be his messengers. The hike through the torii gates takes about 2-3 hours round trip, but the tranquility and beauty of the forest make it worth every step.

In Tokyo, I visited Senso-ji, the city's oldest temple. Founded in 645 AD, it's dedicated to Kannon, the goddess of mercy. The approach to the temple through Nakamise Shopping Street is lined with vendors selling traditional snacks and souvenirs, creating a lively atmosphere that contrasts with the temple's serene interior.

What struck me most about these temples wasn't just their architectural beauty or historical significance, but the way they continue to be living centers of worship and community. Watching locals and monks go about their daily rituals provided a glimpse into the enduring spiritual traditions that have shaped Japanese culture for centuries.

As I left Japan, I carried with me not just photographs of stunning temples, but a deeper appreciation for a culture that has preserved its spiritual heritage while embracing modernity. These temples aren't just tourist attractions; they're sacred spaces that continue to inspire and provide solace in our fast-paced world.`,
    author: "Sneha Verma",
    date: "2023-06-15",
    coverImage: "/images/toji-temple.png",
    country: "Japan",
    countryCode: "jpn",
    countryFlag: "/placeholder.svg?height=100&width=100",
    likes: 124,
    liked: false,
    comments: [
      {
        id: "c1",
        blogId: "1",
        author: "Emma Wilson",
        avatar: "/placeholder.svg?height=100&width=100",
        content: "Beautiful description! I visited Kinkaku-ji last year and it was breathtaking.",
        date: "2023-06-16",
      },
      {
        id: "c2",
        blogId: "1",
        author: "David Chen",
        avatar: "/placeholder.svg?height=100&width=100",
        content: "Great post! Did you get a chance to visit Kiyomizu-dera? It has amazing views of Kyoto.",
        date: "2023-06-17",
      },
    ],
  },
  {
    id: "2",
    title: "A Week in the Italian Countryside",
    excerpt: "Discovering hidden gems in Tuscany, from family-owned vineyards to medieval hilltop towns.",
    content: `Tuscany has always been on my travel bucket list, but I wanted to experience it beyond the typical tourist routes. So I rented a small Fiat and set out to explore the Italian countryside for a week.

My journey began in the Val d'Orcia, a UNESCO World Heritage site known for its picturesque landscapes. Rolling hills dotted with cypress trees, medieval castles perched on hilltops, and fields of sunflowers stretching to the horizon – it was like driving through a Renaissance painting.

I stayed in a small agriturismo (farm stay) near Pienza, a perfect base for exploring the region. Each morning started with a homemade breakfast featuring fresh ricotta, honey, and fruits from the farm, accompanied by the strongest coffee I've ever tasted.

One of the highlights was visiting family-owned vineyards in the Chianti region. Unlike the commercial wine tours, these intimate experiences allowed me to meet the families who have been producing wine for generations. At one vineyard, the 80-year-old nonna (grandmother) insisted I try her homemade pasta with wild boar ragù – a meal I still dream about.

The medieval town of San Gimignano, known for its tower houses, offered a glimpse into Tuscany's rich history. Walking through its narrow cobblestone streets felt like stepping back in time. I climbed the Torre Grossa for panoramic views of the countryside and enjoyed the world's best gelato at Gelateria Dondoli (it's won awards!).

In Montepulciano, I discovered underground wine cellars built by the Etruscans centuries ago. These cavernous spaces, carved into the volcanic rock beneath the town, now house aging barrels of Vino Nobile di Montepulciano.

What made this trip special wasn't just the breathtaking landscapes or the incredible food and wine, but the people I met along the way. From the elderly farmer who gave me directions (and a bottle of olive oil) when I got lost, to the local artists selling their crafts in small village markets – the warmth and generosity of the Tuscans made me feel at home.

As I reluctantly returned my rental car and prepared to leave, I realized that Tuscany had given me more than just beautiful photos and memorable meals. It had reminded me of the importance of slowing down, savoring each moment, and connecting with both the land and its people – lessons I hope to carry with me long after this journey.`,
    author: "Sneha Verma",
    date: "2023-07-22",
    coverImage: "/images/venice.png",
    country: "Italy",
    countryCode: "ita",
    countryFlag: "/placeholder.svg?height=100&width=100",
    likes: 98,
    liked: false,
    comments: [
      {
        id: "c3",
        blogId: "2",
        author: "Marco Rossi",
        avatar: "/placeholder.svg?height=100&width=100",
        content:
          "As an Italian, I appreciate how you captured the essence of Tuscany! Next time, visit Lucca - it's a hidden gem.",
        date: "2023-07-23",
      },
    ],
  },
  {
    id: "3",
    title: "Safari Adventures in Kenya",
    excerpt: "Witnessing the Great Migration in the Maasai Mara and connecting with local communities.",
    content: `The moment our small plane touched down on the dirt airstrip in the Maasai Mara, I knew this would be unlike any experience I'd ever had. We were greeted by our guide, James, a Maasai warrior turned safari expert, whose knowledge of the land and its wildlife would prove invaluable in the days ahead.

Our first game drive began at dawn, the savanna bathed in golden light as we set out in an open-top Land Cruiser. Within minutes, we encountered a pride of lions lounging after a night's hunt, cubs playfully wrestling while the adults dozed. James explained how each lion has unique whisker patterns, allowing researchers to identify individuals – just one example of the intricate knowledge that would enhance our wildlife viewing throughout the trip.

The timing of our visit coincided with the Great Migration, one of nature's most spectacular events. We watched in awe as thousands of wildebeest and zebra crossed the Mara River, their determination palpable as they braved crocodile-infested waters and steep banks. The thundering of hooves, the calls of the animals, and the palpable tension in the air created a primal symphony that no nature documentary could ever fully capture.

Beyond the famous "Big Five" (lion, leopard, elephant, buffalo, and rhinoceros), which we were fortunate enough to see, the Mara's smaller creatures equally captivated me. A family of warthogs trotting with their tails held high, a chameleon slowly changing color on a branch, dung beetles diligently rolling their precious cargo – these moments of everyday wildlife behavior were just as magical as spotting a rare black rhino.

Our accommodations, a tented camp powered by solar energy, struck the perfect balance between comfort and connection to nature. Falling asleep to the distant roars of lions and waking to the chorus of birds created an immersive experience that deepened my appreciation for this ecosystem.

A visit to a Maasai village provided cultural context to our wildlife adventures. We were welcomed with traditional jumping dances, and I participated in a beading workshop with the women of the village. Learning about their sustainable practices and deep respect for the land added another dimension to understanding conservation efforts in the region.

On our final evening, as we sipped sundowners watching elephants silhouetted against the setting sun, James shared his concerns about climate change and its impact on wildlife patterns. This conversation highlighted the delicate balance of this ecosystem and the importance of responsible tourism in preserving it for future generations.

Leaving the Mara, I carried with me not just extraordinary photographs and memories, but a profound respect for the interconnectedness of all living things. This safari was more than a wildlife viewing experience – it was a reminder of our place in the natural world and our responsibility to protect these wild spaces.`,
    author: "Sneha Verma",
    date: "2023-08-05",
    coverImage: "/images/amboseli.png",
    country: "Kenya",
    countryCode: "ken",
    countryFlag: "/placeholder.svg?height=100&width=100",
    likes: 156,
    liked: true,
    comments: [
      {
        id: "c4",
        blogId: "3",
        author: "Sarah Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
        content:
          "Your description of the Great Migration gave me goosebumps! Kenya is now at the top of my travel list.",
        date: "2023-08-06",
      },
      {
        id: "c5",
        blogId: "3",
        author: "James Kimani",
        avatar: "/placeholder.svg?height=100&width=100",
        content:
          "As a Kenyan tour guide, I appreciate how you highlighted both the wildlife and cultural aspects of the Mara. Karibu tena (welcome again)!",
        date: "2023-08-07",
      },
      {
        id: "c6",
        blogId: "3",
        author: "Emily Parker",
        avatar: "/placeholder.svg?height=100&width=100",
        content:
          "What camera equipment did you use for your safari? Your descriptions are so vivid, I can almost imagine the photos!",
        date: "2023-08-08",
      },
    ],
  },
]

export async function fetchBlogs() {
  // In a real app, this would be an API call
  return mockBlogs
}

export async function fetchBlogById(id: string) {
  // In a real app, this would be an API call
  return mockBlogs.find((blog) => blog.id === id) || null
}

