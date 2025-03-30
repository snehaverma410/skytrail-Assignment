export interface Blog {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  coverImage: string
  country: string
  countryCode: string
  countryFlag: string
  likes: number
  liked: boolean
  comments: Comment[]
}

export interface Comment {
  id: string
  blogId: string
  author: string
  avatar: string
  content: string
  date: string
}

export interface CountryData {
  name: {
    common: string
    official: string
  }
  capital: string[]
  region: string
  subregion: string
  population: number
  flags: {
    png: string
    svg: string
    alt: string
  }
  languages: Record<string, string>
  currencies: Record<
    string,
    {
      name: string
      symbol: string
    }
  >
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

