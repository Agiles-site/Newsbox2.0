import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare } from "lucide-react"

// Mock data for forum categories
const forumCategories = [
  {
    id: 1,
    name: "Computer Science Club",
    description: "Discussions about programming, technology, and computer science topics.",
    image: "/placeholder.svg?height=100&width=100",
    members: 156,
    topics: 48,
    posts: 342,
  },
  {
    id: 2,
    name: "Business & Entrepreneurship",
    description: "For students interested in business, startups, and entrepreneurship.",
    image: "/placeholder.svg?height=100&width=100",
    members: 124,
    topics: 37,
    posts: 285,
  },
  {
    id: 3,
    name: "Photography Club",
    description: "Share your photography, discuss techniques, and organize photo walks.",
    image: "/placeholder.svg?height=100&width=100",
    members: 89,
    topics: 25,
    posts: 198,
  },
  {
    id: 4,
    name: "Debate Society",
    description: "Engage in thoughtful debates on various topics and improve your public speaking skills.",
    image: "/placeholder.svg?height=100&width=100",
    members: 76,
    topics: 31,
    posts: 267,
  },
  {
    id: 5,
    name: "Environmental Club",
    description: "Discuss environmental issues and organize sustainability initiatives on campus.",
    image: "/placeholder.svg?height=100&width=100",
    members: 68,
    topics: 22,
    posts: 154,
  },
  {
    id: 6,
    name: "Music & Arts",
    description: "For students passionate about music, visual arts, and performing arts.",
    image: "/placeholder.svg?height=100&width=100",
    members: 112,
    topics: 34,
    posts: 278,
  },
  {
    id: 7,
    name: "Sports Club",
    description: "Discuss sports, organize games, and stay updated on university sports events.",
    image: "/placeholder.svg?height=100&width=100",
    members: 145,
    topics: 42,
    posts: 312,
  },
  {
    id: 8,
    name: "International Students",
    description: "A community for international students to connect and share experiences.",
    image: "/placeholder.svg?height=100&width=100",
    members: 93,
    topics: 28,
    posts: 216,
  },
]

export default function ForumCategories() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {forumCategories.map((category) => (
        <Card key={category.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{category.description}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{category.members} members</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                <span>{category.topics} topics</span>
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 p-4">
            <Link href={`/forums/category/${category.id}`} className="text-sm font-medium text-primary hover:underline">
              View Discussions
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
