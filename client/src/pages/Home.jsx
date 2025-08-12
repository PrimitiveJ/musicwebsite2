import LessonTypes from "../components/LessonTypes"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="text-7xl md:text-8xl font-extrabold mb-8 text-center drop-shadow-lg tracking-tight font-[Montserrat] text-white">Primitive Music School</h1>
          <p className="hero-desc">
            Personalized music lessons for all ages, beginner to advanced. We are committed to bringing quality musical education to the Triangle area of North Carolina!
          </p>
         <Link
              to="/book"
              className="hero-btn"
            >
              Book a Lesson
            </Link>
        </div>
      </section>

      <LessonTypes />
    </>
  )
}
