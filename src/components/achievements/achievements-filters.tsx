"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, X } from "lucide-react"

export default function AchievementsFilters() {
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
          placeholder="Search achievements..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Accordion type="multiple" defaultValue={["departments", "date-range"]}>
        <AccordionItem value="departments">
          <AccordionTrigger>Departments</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="computer-science" />
                <Label htmlFor="computer-science" className="font-normal">
                  Computer Science
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="business" />
                <Label htmlFor="business" className="font-normal">
                  Business Administration
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="engineering" />
                <Label htmlFor="engineering" className="font-normal">
                  Engineering
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="arts" />
                <Label htmlFor="arts" className="font-normal">
                  Arts & Humanities
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="science" />
                <Label htmlFor="science" className="font-normal">
                  Natural Sciences
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="achievement-type">
          <AccordionTrigger>Achievement Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="awards" />
                <Label htmlFor="awards" className="font-normal">
                  Awards & Recognitions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="publications" />
                <Label htmlFor="publications" className="font-normal">
                  Publications
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="competitions" />
                <Label htmlFor="competitions" className="font-normal">
                  Competitions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="volunteer" />
                <Label htmlFor="volunteer" className="font-normal">
                  Volunteer Work
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sports" />
                <Label htmlFor="sports" className="font-normal">
                  Sports Achievements
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="date-range">
          <AccordionTrigger>Date Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="this-month" />
                <Label htmlFor="this-month" className="font-normal">
                  This Month
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="last-3-months" />
                <Label htmlFor="last-3-months" className="font-normal">
                  Last 3 Months
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="last-6-months" />
                <Label htmlFor="last-6-months" className="font-normal">
                  Last 6 Months
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="last-year" />
                <Label htmlFor="last-year" className="font-normal">
                  Last Year
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="all-time" />
                <Label htmlFor="all-time" className="font-normal">
                  All Time
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
