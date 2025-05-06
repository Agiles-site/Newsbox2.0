import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AchievementsList from "@/components/achievements/achievements-list"
import AchievementsFilters from "@/components/achievements/achievements-filters"
import CreateAchievementButton from "@/components/achievements/create-achievement-button"

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Achievements</h1>
          <p className="text-muted-foreground">Celebrate and showcase academic and extracurricular accomplishments</p>
        </div>
        <CreateAchievementButton />
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-8 grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="extracurricular">Extracurricular</TabsTrigger>
        </TabsList>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <AchievementsFilters />
          </div>
          <div className="md:col-span-3">
            <TabsContent value="all" className="mt-0">
              <AchievementsList category="all" />
            </TabsContent>
            <TabsContent value="academic" className="mt-0">
              <AchievementsList category="academic" />
            </TabsContent>
            <TabsContent value="sports" className="mt-0">
              <AchievementsList category="sports" />
            </TabsContent>
            <TabsContent value="extracurricular" className="mt-0">
              <AchievementsList category="extracurricular" />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
