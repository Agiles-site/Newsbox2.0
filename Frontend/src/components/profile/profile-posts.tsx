import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageSquare, Calendar, PenSquare } from "lucide-react"

// Mock data for user posts
const userPosts = [
  {
    id: 1,
    title: "Looking for study partners for Algorithms final",
    category: "Study Group",
    content:
      "I'm preparing for the CS301 Algorithms final exam and looking for study partners. Planning to meet at the library 3 times a week. Anyone interested?",
    date: "May 5, 2025",
    likes: 8,
    comments: 12,
  },
  {
    id: 2,
    title: "Robotics Club meeting summary",
    category: "Club",
    content:
      "Here's a summary of yesterday's Robotics Club meeting. We discussed the upcoming competition, assigned tasks, and set deadlines for the project milestones.",
    date: "April 28, 2025",
    likes: 15,
    comments: 7,
  },
  {
    id: 3,
    title: "Internship experience at TechCorp",
    category: "Career",
    content:
      "Just completed my first month as a Software Engineering Intern at TechCorp. Here's what I've learned so far and some tips for those applying to tech internships.",
    date: "April 15, 2025",
    likes: 24,
    comments: 9,
  },
  {
    id: 4,
    title: "Resources for learning React and Next.js",
    category: "Resources",
    content:
      "I've compiled a list of helpful resources for learning React and Next.js that helped me build my portfolio website. Includes tutorials, documentation, and project ideas.",
    date: "March 20, 2025",
    likes: 31,
    comments: 14,
  },
]

export default function ProfilePosts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Posts</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      {userPosts.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{post.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold">
                <Link href={`/forums/post/${post.id}`} className="hover:text-primary hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">{post.content}</p>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.comments}</span>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/forums/post/${post.id}`}>View Discussion</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/forums/new">
            <PenSquare className="mr-2 h-4 w-4" />
            Create New Post
          </Link>
        </Button>
      </div>
    </div>
  )
}
