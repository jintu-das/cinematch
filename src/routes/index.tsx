import { Button } from '#/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

const MOODS = [
  'contemplative',
  'devastated',
  'ecstatic',
  'melancholic',
  'nostalgic',
  'romantic',
  'suspenseful',
  'thrilling',
] as const

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="container">
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <p className="text-xs font-light">HOW ARE YOU FEELING TONIGHT?</p>
        <h1 className="text-3xl font-semibold">
          Discover your next great film
        </h1>
        <p className="text-lg font-light">
          Taste-driven recommendations for cinephiles. World cinema, arthouse,
          festival darlings.
        </p>

        <div className="flex gap-3 flex-wrap">
          {MOODS.map((mood) => (
            <Button key={mood} variant="outline" size="lg">
              {mood}
            </Button>
          ))}
        </div>
      </div>
    </main>
  )
}
