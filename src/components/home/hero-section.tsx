import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Briefcase, Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div>
            <Badge className="mb-2">University Community</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
              Connect, Collaborate, and Grow Together
            </h1>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
              Join our university community platform to connect with students, alumni, and faculty. Share knowledge,
              find opportunities, and celebrate achievements.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild>
              <Link href="/register">Join Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Link href="/study-groups" className="block p-6 hover:bg-accent/50">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Study Groups</h3>
                    <p className="text-sm text-muted-foreground">Schedule and join study sessions</p>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Link href="/jobs" className="block p-6 hover:bg-accent/50">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Job Postings</h3>
                    <p className="text-sm text-muted-foreground">Find internships and job opportunities</p>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Link href="/forums" className="block p-6 hover:bg-accent/50">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Forums</h3>
                    <p className="text-sm text-muted-foreground">Discuss and share ideas with peers</p>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Link href="/achievements" className="block p-6 hover:bg-accent/50">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Achievements</h3>
                    <p className="text-sm text-muted-foreground">Showcase your accomplishments</p>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
