import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Award, Calendar } from "lucide-react"

// Mock data for user achievements
const userAchievements = [
  {
    id: 1,
    title: "First Place in Hackathon",
    category: "academic",
    description:
      "Won first place in the university hackathon with a project that uses AI to optimize campus energy usage.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 15, 2025",
    likes: 42,
  },
  {
    id: 2,
    title: "Dean's List Recognition",
    category: "academic",
    description: "Recognized on the Dean's List for academic excellence with a GPA of 3.9 for the Fall 2024 semester.",
    image: "/placeholder.svg?height=200&width=400",
    date: "January 20, 2025",
    likes: 38,
  },
  {
    id: 3,
    title: "Debate Competition Finalist",
    category: "extracurricular",
    description: "Reached the finals of the Regional Debate Competition representing the university's Debate Society.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 5, 2025",
    likes: 27,
  },
]

export default function ProfileAchievements() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Achievements</h2>
        <Button variant="outline" size="sm" asChild>
          <Link href="/achievements">View All</Link>
        </Button>
      </div>

      {userAchievements.map((achievement) => (
        <Card key={achievement.id}>
          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge>{achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>

                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{achievement.likes}</span>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/achievements/${achievement.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>

              <div className="relative mt-4 h-40 overflow-hidden rounded-md sm:mt-0">
                <Image
                  src={achievement.image || "/placeholder.svg"}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/achievements/create">
            <Award className="mr-2 h-4 w-4" />
            Add New Achievement
          </Link>
        </Button>
      </div>
    </div>
  )
}
