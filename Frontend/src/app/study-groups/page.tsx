import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import StudyGroupList from "@/components/study-groups/study-group-list"
import CreateStudyGroupButton from "@/components/study-groups/create-study-group-button"

export default function StudyGroupsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Groups</h1>
          <p className="text-muted-foreground">Find or create study groups with fellow students</p>
        </div>
        <CreateStudyGroupButton />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <StudyGroupList />
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h3 className="mb-4 font-semibold">Calendar</h3>
            <Calendar mode="single" className="rounded-md border" />
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/study-groups/calendar">View Full Calendar</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h3 className="mb-4 font-semibold">Popular Subjects</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                Computer Science
              </Button>
              <Button variant="outline" size="sm">
                Mathematics
              </Button>
              <Button variant="outline" size="sm">
                Physics
              </Button>
              <Button variant="outline" size="sm">
                Business
              </Button>
              <Button variant="outline" size="sm">
                Engineering
              </Button>
              <Button variant="outline" size="sm">
                Psychology
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
