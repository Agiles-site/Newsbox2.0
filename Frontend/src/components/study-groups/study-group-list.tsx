"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Users, Search } from "lucide-react"

// Mock data for study groups
const studyGroups = [
  {
    id: 1,
    title: "Calculus II Final Exam Prep",
    subject: "Mathematics",
    description:
      "Preparing for the Calculus II final exam. We'll cover integration techniques, series, and applications.",
    date: "May 20, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Library Study Room 3",
    isOnline: false,
    organizer: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    participants: 5,
    maxParticipants: 8,
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    subject: "Computer Science",
    description:
      "Weekly study group for CS301: Data Structures & Algorithms. We'll be working on problem sets and practice exercises.",
    date: "May 18, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Zoom Meeting",
    isOnline: true,
    organizer: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    participants: 12,
    maxParticipants: 15,
  },
  {
    id: 3,
    title: "Organic Chemistry Lab Preparation",
    subject: "Chemistry",
    description: "Preparing for the upcoming organic chemistry lab. We'll review procedures and safety protocols.",
    date: "May 19, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Science Building Room 201",
    isOnline: false,
    organizer: {
      name: "Michael Torres",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    participants: 8,
    maxParticipants: 10,
  },
  {
    id: 4,
    title: "Marketing Strategy Case Studies",
    subject: "Business",
    description:
      "Analyzing real-world marketing case studies for BUS405. We'll discuss strategies, outcomes, and lessons learned.",
    date: "May 21, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Business Building Room 105",
    isOnline: false,
    organizer: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    participants: 6,
    maxParticipants: 12,
  },
]

export default function StudyGroupList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredGroups = studyGroups.filter((group) => {
    const matchesSearch =
      group.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "online") return matchesSearch && group.isOnline
    if (activeTab === "in-person") return matchesSearch && !group.isOnline

    return matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search study groups..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Groups</TabsTrigger>
          <TabsTrigger value="online">Online</TabsTrigger>
          <TabsTrigger value="in-person">In-Person</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredGroups.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <p className="mb-2 text-sm text-muted-foreground">No study groups found</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/study-groups/create">Create a Study Group</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredGroups.map((group) => (
                <Card key={group.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{group.subject}</Badge>
                          {group.isOnline && <Badge variant="secondary">Online</Badge>}
                        </div>
                        <h3 className="text-xl font-semibold">{group.title}</h3>
                        <p className="text-sm text-muted-foreground">{group.description}</p>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>
                              {group.date}, {group.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{group.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>
                              {group.participants}/{group.maxParticipants} participants
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={group.organizer.avatar || "/placeholder.svg"} alt={group.organizer.name} />
                          <AvatarFallback>{group.organizer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">Organized by {group.organizer.name}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t px-6 py-4">
                    <Button variant="outline" asChild>
                      <Link href={`/study-groups/${group.id}`}>View Details</Link>
                    </Button>
                    <Button>Join Group</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
