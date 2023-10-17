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
      <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
        <Navbar />
        <News />
        <Hero />
        <Timetable />
        <Contact />
        <Footer />
      </main>
    // </FirebaseContext.Provider>
  )
}
