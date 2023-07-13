import MenuToggle from "./components/MenuToggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="text-4xl font-bold">Alexander Carvalho</h1>
      <MenuToggle />
    </main>
  )
}
