import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="">
      <h1>About Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque
        amet fuga voluptatibus, voluptatum, omnis praesentium repellendus culpa
        illum dicta, eveniet molestias minima atque! Dignissimos cum velit enim
        sit animi!
      </p>
    </main>
  )
}
