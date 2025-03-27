import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/decor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/decor"!</div>
}
