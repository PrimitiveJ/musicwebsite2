// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Lessons from "./pages/Lessons"
import Contact from "./pages/Contact"
import GuitarLesson from "./pages/lessons/guitar"
import Booking from "./pages/Booking"
import Privacy from "./pages/Privacy"
import Cancellation from "./pages/Cancellation"
import Terms from "./pages/Terms"
import BassLesson from "./pages/lessons/bass"
import ViolinLesson from "./pages/lessons/violin"
import PianoLesson from "./pages/lessons/piano"
import DJingLesson from "./pages/lessons/djing"
import MusicProductionLesson from "./pages/lessons/music-production"
import SongwritingLesson from "./pages/lessons/songwriting"
import SynthSoundDesignLesson from "./pages/lessons/synth-sound-design"
import Policies from "./pages/Policies"

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
