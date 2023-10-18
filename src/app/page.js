'use client'

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { News } from "./components/news/News";
import { Timetable } from './components/Timetable/Timetable'
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export default function Home() {

  return (
    // <FirebaseContext.Provider value={firebaseConfig}>
      <main className="snap-y h-[100dvh] flex flex-col items-center justify-between overflow-x-hidden scrollbar-hide">
        <Navbar />
        <Hero />
        <News />
        <Timetable />
        <Contact />
        <Footer />
      </main>
    // </FirebaseContext.Provider>
  )
}
