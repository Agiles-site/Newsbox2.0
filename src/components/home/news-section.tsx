"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, ThumbsUp, MessageSquare } from "lucide-react"

// Mock data for news items
const newsItems = [
  {
    id: 1,
    title: "Computer Science Department Hosts Annual Hackathon",
    excerpt: "Join us for a 48-hour coding challenge with amazing prizes and networking opportunities.",
    category: "Events",
    date: "May 15, 2025",
    author: {
      name: "Prof. Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Faculty",
    },
    image: "/placeholder.svg?height=200&width=400",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    title: "Student Team Wins National Robotics Competition",
    excerpt: "Our university's robotics team secured first place at the National Robotics Championship.",
    category: "Achievements",
    date: "May 10, 2025",
    author: {
      name: "John Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Student",
    },
    image: "/placeholder.svg?height=200&width=400",
    likes: 56,
    comments: 12,
  },
  {
    id: 3,
    title: "Summer Internship Opportunities at Tech Giants",
    excerpt: "Several tech companies are offering exclusive internship positions for our students.",
    category: "Jobs",
    date: "May 8, 2025",
    author: {
      name: "Career Services",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Department",
    },
    image: "/placeholder.svg?height=200&width=400",
    likes: 42,
    comments: 15,
  },
  {
    id: 4,
    title: "Photography Club Exhibition This Weekend",
    excerpt: "Don't miss the annual photography exhibition showcasing student talent in the main hall.",
    category: "Clubs",
    date: "May 5, 2025",
    author: {
      name: "Photography Club",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Club",
    },
    image: "/placeholder.svg?height=200&width=400",
    likes: 18,
    comments: 5,
  },
]

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredNews =
    activeTab === "all" ? newsItems : newsItems.filter((item) => item.category.toLowerCase() === activeTab)

  return (
    <section className="py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Latest Updates</h2>
        <Link href="/news" className="text-sm font-medium text-primary hover:underline">
          View all updates
        </Link>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="clubs">Clubs</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredNews.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute right-2 top-2">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={item.author.avatar || "/placeholder.svg"} alt={item.author.name} />
                      <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      {item.author.name} · {item.author.role}
                    </span>
                  </div>
                  <h3 className="line-clamp-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ThumbsUp className="h-3 w-3" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MessageSquare className="h-3 w-3" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
