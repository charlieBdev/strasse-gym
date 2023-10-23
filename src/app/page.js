'use client'

import { Hero } from "./components/Hero";
import { News } from "./components/news/News";
import { Timetable } from './components/Timetable/Timetable'
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Navbar } from './components/Navbar'

export default function Home() {

  return (
      <main className="snap-y snap-proximity flex flex-col items-center justify-between overflow-x-hidden">
        <div className='snap-center h-[100dvh] w-full'>
          <Navbar />
          <Hero />
        </div>
        <News />
        <Timetable />
        <Contact />
        <Footer />
      </main>
  )
}
