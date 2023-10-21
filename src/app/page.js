'use client'

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { News } from "./components/news/News";
import { Timetable } from './components/Timetable/Timetable'
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export default function Home() {

  return (
      // <main className="snap-y h-[100dvh] flex flex-col items-center justify-between overflow-x-hidden scrollbar-hide">
      // <main className="h-[100dvh] flex flex-col items-center justify-between overflow-x-hidden no-scrollbar">
      <main className="snap-mandatory snap-y flex flex-col items-center justify-between overflow-x-hidden no-scrollbar">
        <Navbar />
        <Hero />
        <News />
        <Timetable />
        <Contact />
        <Footer />
      </main>
  )
}
