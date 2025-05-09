import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, Building, CalendarDays } from "lucide-react"

// Mock data for job listings
const jobListings = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechCorp",
    logo: "/placeholder.svg?height=60&width=60",
    location: "San Francisco, CA",
    locationType: "On-site",
    type: "Internship",
    salary: "$25-30/hour",
    postedDate: "2 days ago",
    deadline: "May 30, 2025",
    description:
      "Join our engineering team for a summer internship focused on full-stack development. You'll work on real projects using React, Node.js, and AWS.",
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Experience with JavaScript, HTML, and CSS",
      "Familiarity with React or similar frameworks is a plus",
      "Strong problem-solving skills and attention to detail",
    ],
  },
  {
    id: 2,
    title: "Marketing Assistant",
    company: "Global Brands Inc.",
    logo: "/placeholder.svg?height=60&width=60",
    location: "Remote",
    locationType: "Remote",
    type: "Part-time",
    salary: "$20-22/hour",
    postedDate: "1 week ago",
    deadline: "May 25, 2025",
    description:
      "We're looking for a part-time Marketing Assistant to help with social media management, content creation, and campaign analytics.",
    requirements: [
      "Currently pursuing a degree in Marketing, Communications, or related field",
      "Experience with social media platforms and content creation",
      "Basic understanding of marketing analytics",
      "Excellent written and verbal communication skills",
    ],
  },
  {
    id: 3,
    title: "Research Assistant - Biology Lab",
    company: "University Research Department",
    logo: "/placeholder.svg?height=60&width=60",
    location: "University Campus",
    locationType: "On-site",
    type: "Part-time",
    salary: "$18-22/hour",
    postedDate: "3 days ago",
    deadline: "May 20, 2025",
    description:
      "The Biology Department is seeking a Research Assistant to help with ongoing experiments in molecular biology. The position involves lab work, data collection, and analysis.",
    requirements: [
      "Currently pursuing a degree in Biology, Biochemistry, or related field",
      "Previous lab experience preferred",
      "Attention to detail and ability to follow protocols",
      "Available to work 15-20 hours per week",
    ],
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "FinTech Solutions",
    logo: "/placeholder.svg?height=60&width=60",
    location: "Chicago, IL",
    locationType: "Hybrid",
    type: "Full-time",
    salary: "$70,000-85,000/year",
    postedDate: "5 days ago",
    deadline: "June 15, 2025",
    description:
      "We're looking for a Data Analyst to join our growing team. You'll be responsible for analyzing financial data, creating reports, and providing insights to drive business decisions.",
    requirements: [
      "Bachelor's degree in Statistics, Mathematics, Economics, or related field",
      "Experience with SQL, Python, and data visualization tools",
      "Strong analytical and problem-solving skills",
      "Excellent communication skills and ability to present complex data in a clear manner",
    ],
  },
]

export default function JobListings() {
  return (
    <div className="space-y-6">
      {jobListings.map((job) => (
        <Card key={job.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex-shrink-0">
                <div className="relative h-16 w-16 overflow-hidden rounded-md">
                  <Image
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <Badge variant="outline">{job.type}</Badge>
                  {job.locationType === "Remote" && <Badge variant="secondary">Remote</Badge>}
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Posted {job.postedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>Deadline: {job.deadline}</span>
                  </div>
                </div>

                <p className="text-sm">{job.description}</p>

                <div className="pt-2">
                  <h4 className="text-sm font-medium">Requirements:</h4>
                  <ul className="ml-5 list-disc text-sm text-muted-foreground">
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                    {job.requirements.length > 2 && (
                      <li>
                        <Link href={`/jobs/${job.id}`} className="text-primary hover:underline">
                          +{job.requirements.length - 2} more
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t px-6 py-4">
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href={`/jobs/${job.id}`}>View Details</Link>
              </Button>
              <Button>Apply Now</Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
