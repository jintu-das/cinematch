import { Button } from '#/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="container mx-auto">
      <h1 className="text-primary text-3xl">Cinematch</h1>
      <p>
        CineMatch is a taste-driven film discovery app built for serious
        cinephiles. Tell it how you feel tonight, pick the films that shaped
        you, and it learns who you are as a viewer — then finds what you should
        watch next.
      </p>

      <div className="my-8 space-x-2">
        <Button size="lg" variant="default">
          View Details
        </Button>
        <Button size="lg" variant="outline">
          Find Similar
        </Button>
      </div>
    </main>
  )
}
