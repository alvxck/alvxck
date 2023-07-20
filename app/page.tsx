import Title from "@/components/Title" 
import About from "@/components/About"
import Skills from "@/components/Skills"
import Work from "@/components/Work"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="bg-topography"/>
      <div className="flex flex-col items-center space-y-5">
        <Title />
        <About />
        <Skills />
        <Work />
      </div>
    </main>
  )
}
