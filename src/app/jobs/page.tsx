import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import JobListings from "@/components/jobs/job-listings"
import JobFilters from "@/components/jobs/job-filters"
import CreateJobPostingButton from "@/components/jobs/create-job-posting-button"

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Postings</h1>
          <p className="text-muted-foreground">Find internships, part-time, and full-time job opportunities</p>
        </div>
        <CreateJobPostingButton />
      </div>

      <Tabs defaultValue="jobs">
        <TabsList className="mb-8 grid w-full grid-cols-2">
          <TabsTrigger value="jobs">Job Listings</TabsTrigger>
          <TabsTrigger value="tutoring">Tutoring</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="mt-0">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <JobFilters />
            </div>
            <div className="md:col-span-3">
              <JobListings />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tutoring" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Tutoring Section</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Find tutors or offer tutoring services for specific subjects
            </p>
            <p className="mt-4 text-sm">Coming soon...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
