import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ForumCategories from "@/components/forums/forum-categories"
import ForumDiscussions from "@/components/forums/forum-discussions"
import ForumSidebar from "@/components/forums/forum-sidebar"

export default function ForumsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Club Forums</h1>
        <p className="text-muted-foreground">Join discussions and connect with other students in university clubs</p>
      </div>

      <Tabs defaultValue="discussions">
        <TabsList className="mb-8 grid w-full grid-cols-2">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="mt-0">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-3">
              <ForumDiscussions />
            </div>
            <div className="md:col-span-1">
              <ForumSidebar />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="mt-0">
          <ForumCategories />
        </TabsContent>
      </Tabs>
    </div>
  )
}
