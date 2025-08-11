// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Lessons from "./pages/Lessons.jsx"
import Contact from "./pages/Contact.jsx"
import GuitarLesson from "./pages/lessons/guitar.jsx"
import Booking from "./pages/Booking.jsx"
import Privacy from "./pages/Privacy.jsx"
import Cancellation from "./pages/Cancellation.jsx"
import Terms from "./pages/Terms.jsx"
import BassLesson from "./pages/lessons/bass.jsx"
import ViolinLesson from "./pages/lessons/violin.jsx"
import PianoLesson from "./pages/lessons/piano.jsx"
import DJingLesson from "./pages/lessons/djing.jsx"
import MusicProductionLesson from "./pages/lessons/music-production.jsx"
import SongwritingLesson from "./pages/lessons/songwriting.jsx"
import SynthSoundDesignLesson from "./pages/lessons/synth-sound-design.jsx"
import Policies from "./pages/Policies.jsx"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Booking />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/cancellation" element={<Cancellation />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/policies" element={<Policies />} />
          <Route path="/lessons/guitar" element={<GuitarLesson />} />
          <Route path="/lessons/bass" element={<BassLesson />} />
          <Route path="/lessons/violin" element={<ViolinLesson />} />
          <Route path="/lessons/piano" element={<PianoLesson />} />
          <Route path="/lessons/djing" element={<DJingLesson />} />
          <Route path="/lessons/music-production" element={<MusicProductionLesson />} />
          <Route path="/lessons/songwriting" element={<SongwritingLesson />} />
          <Route path="/lessons/synth-sound-design" element={<SynthSoundDesignLesson />} />
        </Route>
      </Routes>
    </Router>
  )
}
