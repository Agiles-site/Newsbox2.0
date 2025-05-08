import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Plus } from "lucide-react"

// Mock data for user events
const userEvents = [
  {
    id: 1,
    title: "Algorithms Study Group",
    type: "Study Group",
    date: "May 15, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Library Study Room 3",
    participants: 5,
    maxParticipants: 8,
    isOrganizer: true,
  },
  {
    id: 2,
    title: "Robotics Club Weekly Meeting",
    type: "Club",
    date: "May 12, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Engineering Building Room 201",
    participants: 18,
    maxParticipants: 25,
    isOrganizer: false,
  },
  {
    id: 3,
    title: "Debate Society Practice Session",
    type: "Club",
    date: "May 14, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Humanities Building Room 105",
    participants: 12,
    maxParticipants: 15,
    isOrganizer: false,
  },
]

export default function ProfileEvents() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <Button variant="outline" size="sm">
          View Calendar
        </Button>
      </div>

      {userEvents.map((event) => (
        <Card key={event.id}>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{event.type}</Badge>
                {event.isOrganizer && <Badge>Organizer</Badge>}
              </div>

              <h3 className="text-lg font-semibold">{event.title}</h3>

              <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>
                    {event.participants}/{event.maxParticipants} participants
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/study-groups/${event.id}`}>View Details</Link>
                </Button>
                {event.isOrganizer ? (
                  <Button size="sm" asChild>
                    <Link href={`/study-groups/${event.id}/edit`}>Manage Event</Link>
                  </Button>
                ) : (
                  <Button size="sm" variant="default">
                    Leave Event
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/study-groups/create">
            <Plus className="mr-2 h-4 w-4" />
            Create New Event
          </Link>
        </Button>
      </div>
    </div>
  )
}
