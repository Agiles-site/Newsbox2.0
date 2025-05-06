"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThumbsUp, MessageSquare, Eye, Search } from "lucide-react"

// Mock data for forum discussions
const forumDiscussions = [
  {
    id: 1,
    title: "Tips for preparing for technical interviews?",
    category: "Computer Science Club",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2 hours ago",
    views: 128,
    likes: 24,
    replies: 15,
    isPinned: true,
    isHot: true,
    excerpt:
      "I have a technical interview coming up with a major tech company. Any advice on how to prepare effectively? What resources would you recommend for algorithm practice?",
  },
  {
    id: 2,
    title: "Photography exhibition planning - volunteers needed!",
    category: "Photography Club",
    author: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "Yesterday",
    views: 86,
    likes: 18,
    replies: 12,
    isPinned: true,
    isHot: false,
    excerpt:
      "We're planning our annual photography exhibition and need volunteers to help with setup, promotion, and managing the event. Please comment if you're interested!",
  },
  {
    id: 3,
    title: "Debate topic suggestions for next month's competition",
    category: "Debate Society",
    author: {
      name: "Michael Torres",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "3 days ago",
    views: 74,
    likes: 15,
    replies: 23,
    isPinned: false,
    isHot: true,
    excerpt:
      "We're looking for interesting and challenging debate topics for our upcoming competition. Please share your suggestions and why you think they would make for a good debate.",
  },
  {
    id: 4,
    title: "Campus sustainability initiative proposal",
    category: "Environmental Club",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "1 week ago",
    views: 92,
    likes: 31,
    replies: 18,
    isPinned: false,
    isHot: false,
    excerpt:
      "I've drafted a proposal for a new sustainability initiative on campus focusing on reducing single-use plastics. Looking for feedback before submitting to the administration.",
  },
  {
    id: 5,
    title: "Startup pitch competition - Registration open",
    category: "Business & Entrepreneurship",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "5 days ago",
    views: 112,
    likes: 27,
    replies: 9,
    isPinned: false,
    isHot: false,
    excerpt:
      "The annual startup pitch competition is now open for registration! Teams of 2-4 students can participate. Cash prizes and mentorship opportunities available for winners.",
  },
]

export default function ForumDiscussions() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDiscussions = forumDiscussions.filter(
    (discussion) =>
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Discussions</h2>
        <Button asChild>
          <Link href="/forums/new">New Discussion</Link>
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search discussions..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredDiscussions.map((discussion) => (
          <Card key={discussion.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/forums/category/${discussion.category}`}
                        className="text-sm font-medium text-muted-foreground hover:text-primary"
                      >
                        {discussion.category}
                      </Link>
                      {discussion.isPinned && <Badge variant="outline">Pinned</Badge>}
                      {discussion.isHot && <Badge variant="secondary">Hot</Badge>}
                    </div>
                    <h3 className="text-xl font-semibold">
                      <Link href={`/forums/discussion/${discussion.id}`} className="hover:text-primary hover:underline">
                        {discussion.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{discussion.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{discussion.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{discussion.replies}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{discussion.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={discussion.author.avatar || "/placeholder.svg"} alt={discussion.author.name} />
                      <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      {discussion.author.name} · {discussion.date}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/forums/discussion/${discussion.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
