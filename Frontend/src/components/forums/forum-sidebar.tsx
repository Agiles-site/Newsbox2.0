import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// Mock data for top contributors
const topContributors = [
  {
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 87,
    badge: "Top Contributor",
  },
  {
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 64,
    badge: "Moderator",
  },
  {
    name: "Michael Torres",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 52,
    badge: null,
  },
  {
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 48,
    badge: null,
  },
  {
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 41,
    badge: null,
  },
]

// Mock data for popular tags
const popularTags = [
  { name: "Programming", count: 124 },
  { name: "Photography", count: 98 },
  { name: "Business", count: 87 },
  { name: "Environment", count: 76 },
  { name: "Debate", count: 65 },
  { name: "Sports", count: 54 },
  { name: "Music", count: 48 },
  { name: "International", count: 42 },
]

export default function ForumSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Top Contributors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {topContributors.map((contributor, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                  <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{contributor.name}</p>
                  <p className="text-xs text-muted-foreground">{contributor.posts} posts</p>
                </div>
              </div>
              {contributor.badge && (
                <Badge variant="outline" className="text-xs">
                  {contributor.badge}
                </Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="cursor-pointer">
                {tag.name} ({tag.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Forum Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Be respectful and considerate to other members</p>
          <p>• Stay on topic and post in the relevant categories</p>
          <p>• No spam, advertising, or self-promotion</p>
          <p>• Follow the university's code of conduct</p>
          <Button variant="outline" className="mt-2 w-full" size="sm" asChild>
            <Link href="/forums/guidelines">Read Full Guidelines</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
