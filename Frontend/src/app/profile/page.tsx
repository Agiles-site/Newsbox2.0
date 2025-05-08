import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProfileAchievements from "@/components/profile/profile-achievements"
import ProfilePosts from "@/components/profile/profile-posts"
import ProfileEvents from "@/components/profile/profile-events"
import { Edit, Mail, MapPin, Briefcase, GraduationCap, Calendar } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 sm:h-64">
          <Button size="sm" variant="ghost" className="absolute right-4 top-4 bg-background/80 backdrop-blur-sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Cover
          </Button>
        </div>

        <div className="relative -mt-16 px-4 sm:flex sm:items-end sm:px-6">
          <div className="relative inline-block h-32 w-32 overflow-hidden rounded-full ring-4 ring-background sm:h-36 sm:w-36">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Profile"
              width={150}
              height={150}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 sm:ml-6 sm:mt-0 sm:flex sm:flex-1 sm:items-center sm:justify-end">
            <div className="sm:flex-1">
              <h1 className="text-2xl font-bold">Alex Johnson</h1>
              <p className="text-muted-foreground">Computer Science, Class of 2026</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline">Student</Badge>
                <Badge variant="outline">Robotics Club</Badge>
                <Badge variant="outline">Debate Society</Badge>
              </div>
            </div>
            <div className="mt-4 flex justify-stretch gap-3 sm:mt-0 sm:flex-col sm:justify-center">
              <Button size="sm" asChild>
                <Link href="/profile/edit">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Link>
              </Button>
              <Button size="sm" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-semibold">About</h2>
              <p className="text-sm text-muted-foreground">
                Computer Science student passionate about AI, robotics, and software development. Active member of the
                Robotics Club and Debate Society.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span>Computer Science</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined September 2022</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>Software Engineering Intern at TechCorp</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-2 text-sm font-medium">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Public Speaking</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="achievements">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            <TabsContent value="achievements" className="mt-0">
              <ProfileAchievements />
            </TabsContent>

            <TabsContent value="posts" className="mt-0">
              <ProfilePosts />
            </TabsContent>

            <TabsContent value="events" className="mt-0">
              <ProfileEvents />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
