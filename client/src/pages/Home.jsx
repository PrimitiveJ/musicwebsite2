import LessonTypes from "../components/LessonTypes"
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <section className="hero-section relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-10 sm:py-20 bg-gradient-to-b from-black to-gray-900 w-full">
        <div className="hero-bg absolute inset-0 z-0"></div>
        <div className="hero-content relative z-10 flex flex-col items-center w-full max-w-3xl">
          <img src="/logo3dark.png" alt="Primitive Music School Logo" className="mb-6 w-32 h-32 object-contain drop-shadow-lg border-4 border-blue-500 rounded-2xl bg-black" />
          {/* <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6 sm:mb-8 text-center drop-shadow-lg tracking-tight font-[Montserrat] text-white leading-tight">
            Primitive Music School
          </h1> */}
          <p className="hero-desc text-base sm:text-lg md:text-xl text-center text-white mb-6 sm:mb-8 px-2">
            Personalized music lessons for all ages, beginner to advanced. We are committed to bringing quality musical education to the Triangle area of North Carolina!
          </p>
          <Link
            to="/book"
            className="hero-btn bg-white text-black font-bold py-2 px-6 rounded shadow hover:bg-gray-200 transition w-full sm:w-auto text-center"
          >
            Book a Lesson
          </Link>
        </div>
      </section>

      <LessonTypes />
    </>
  )
}
