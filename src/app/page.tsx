import { NavBar } from '@/app/ui/nav-bar'
import { Footer } from '@/app/ui/footer'
import { RootLayout } from '@/app/layout'
import { About } from '@/app/component/about'
import { Interests } from '@/app/component/interests'
import { Projects } from '@/app/component/projects'
import { Goals } from '@/app/component/goals'
import { Skills } from '@/app/component/skills'
import { RickRoll } from '@/app/component/rickroll'
 
export default function Layout({ children }: { children: RootLayout }) {
  return (
    <html lang="en" className='min-h-screen '>
      <body className="flex flex-col min-h-screen p-4 bg-gradient-to-l from-red-500 bg-gradient-to-r to-blue-500 text-slate-100 font-mono"  >
        <NavBar />
        <main className="flex flex-col min-h-screen">
          <About />
          <Interests />
          <Projects />
          <Goals />
          <Skills />
          <RickRoll />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}