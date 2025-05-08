"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, X } from "lucide-react"

export default function JobFilters() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="sticky top-24 space-y-6 rounded-lg border p-4">
      <div className="space-y-4">
        <h3 className="font-medium">Filters</h3>
        <Button variant="outline" size="sm" className="w-full">
          <X className="mr-2 h-4 w-4" />
          Reset Filters
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search jobs..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Accordion type="multiple" defaultValue={["job-type", "location", "salary"]}>
        <AccordionItem value="job-type">
          <AccordionTrigger>Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="full-time" />
                <Label htmlFor="full-time" className="font-normal">
                  Full-time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="part-time" />
                <Label htmlFor="part-time" className="font-normal">
                  Part-time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internship" />
                <Label htmlFor="internship" className="font-normal">
                  Internship
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contract" />
                <Label htmlFor="contract" className="font-normal">
                  Contract
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <Label htmlFor="remote" className="font-normal">
                  Remote
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="on-site" />
                <Label htmlFor="on-site" className="font-normal">
                  On-site
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hybrid" />
                <Label htmlFor="hybrid" className="font-normal">
                  Hybrid
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="salary">
          <AccordionTrigger>Salary Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 100]} max={100} step={1} />
              <div className="flex items-center justify-between">
                <span className="text-sm">$0</span>
                <span className="text-sm">$100k+</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="date-posted">
          <AccordionTrigger>Date Posted</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="past-24h" />
                <Label htmlFor="past-24h" className="font-normal">
                  Past 24 hours
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="past-week" />
                <Label htmlFor="past-week" className="font-normal">
                  Past week
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="past-month" />
                <Label htmlFor="past-month" className="font-normal">
                  Past month
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="anytime" />
                <Label htmlFor="anytime" className="font-normal">
                  Anytime
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}
