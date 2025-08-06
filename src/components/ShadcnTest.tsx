import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ShadcnTest() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">shadcn/ui Test</h1>
      
      {/* Buttons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content. shadcn/ui is working perfectly!</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
              <CardDescription>With some content</CardDescription>
            </CardHeader>
            <CardContent>
              <p>You can put any content here. The styling is handled automatically.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Badges */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </div>
  )
} 