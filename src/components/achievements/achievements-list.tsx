import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Share2, Calendar } from "lucide-react"

// Mock data for achievements
const achievements = [
  {
    id: 1,
    title: "First Place in National Robotics Competition",
    category: "academic",
    description:
      "Our team won first place in the National Robotics Competition with our autonomous robot design that can navigate complex environments and perform precise tasks.",
    image: "/placeholder.svg?height=300&width=600",
    date: "May 2, 2025",
    student: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Computer Science",
    },
    likes: 87,
    shares: 24,
  },
  {
    id: 2,
    title: "Published Research Paper in International Journal",
    category: "academic",
    description:
      "My research on machine learning applications in healthcare was published in the International Journal of Computer Science. The paper explores novel approaches to medical image analysis.",
    image: "/placeholder.svg?height=300&width=600",
    date: "April 28, 2025",
    student: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Computer Science",
    },
    likes: 64,
    shares: 18,
  },
  {
    id: 3,
    title: "University Basketball Team Championship",
    category: "sports",
    description:
      "Our university basketball team won the regional championship after an undefeated season. The final game was a nail-biter with a last-second winning shot.",
    image: "/placeholder.svg?height=300&width=600",
    date: "April 15, 2025",
    student: {
      name: "Michael Torres",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Business Administration",
    },
    likes: 112,
    shares: 42,
  },
  {
    id: 4,
    title: "Community Service Award for Volunteer Work",
    category: "extracurricular",
    description:
      "Received the Community Service Award for organizing a series of workshops teaching computer skills to underprivileged youth in our community.",
    image: "/placeholder.svg?height=300&width=600",
    date: "April 10, 2025",
    student: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Education",
    },
    likes: 76,
    shares: 31,
  },
  {
    id: 5,
    title: "First Prize in Business Plan Competition",
    category: "academic",
    description:
      "Won first prize in the annual Business Plan Competition with our startup idea for a sustainable food delivery service that reduces packaging waste.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 25, 2025",
    student: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Business Administration",
    },
    likes: 58,
    shares: 22,
  },
  {
    id: 6,
    title: "National Swimming Championship Medal",
    category: "sports",
    description:
      "Won a silver medal in the 200m freestyle at the National Swimming Championships, setting a new university record in the process.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 18, 2025",
    student: {
      name: "Olivia Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Physical Education",
    },
    likes: 94,
    shares: 36,
  },
]

export default function AchievementsList({ category }: { category: string }) {
  const filteredAchievements =
    category === "all" ? achievements : achievements.filter((achievement) => achievement.category === category)

  return (
    <div className="space-y-6">
      {filteredAchievements.map((achievement) => (
        <Card key={achievement.id} className="overflow-hidden">
          <div className="relative h-64 w-full sm:h-72">
            <Image
              src={achievement.image || "/placeholder.svg"}
              alt={achievement.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <Badge>{achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{achievement.date}</span>
              </div>
            </div>

            <h3 className="mb-2 text-2xl font-bold">{achievement.title}</h3>
            <p className="text-muted-foreground">{achievement.description}</p>

            <div className="mt-6 flex items-center gap-3">
              <Avatar>
                <AvatarImage src={achievement.student.avatar || "/placeholder.svg"} alt={achievement.student.name} />
                <AvatarFallback>{achievement.student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{achievement.student.name}</p>
                <p className="text-sm text-muted-foreground">{achievement.student.department}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{achievement.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                <span>{achievement.shares}</span>
              </Button>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/achievements/${achievement.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
