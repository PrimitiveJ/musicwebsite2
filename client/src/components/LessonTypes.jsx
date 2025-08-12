// src/components/LessonTypes.jsx

const lessons = [
  {
    title: "Guitar",
    description: "Master acoustic and electric guitar with focus on technique, rhythm, and improvisation.",
  },
  {
    title: "Bass",
    description: "Build solid groove, tone, and timing across multiple genres.",
  },
  {
    title: "Violin",
    description: "Develop classical or modern violin technique, posture, and intonation.",
  },
  {
    title: "Piano",
    description: "Foundations of classical and contemporary piano with ear training and theory.",
  },
  {
    title: "DJing",
    description: "Learn beatmatching, mixing, and performance setup using industry-standard gear.",
  },
  {
    title: "Music Production",
    description: "Produce tracks using DAWs like Ableton or FL Studio — recording, editing, mixing.",
  },
  {
    title: "Songwriting",
    description: "Craft melodies, lyrics, and song structure for original compositions.",
  },
  {
    title: "Synth & Sound Design",
    description: "Learn how to build your own unique sounds using synthesizers and effects.",
  },
]


import { Link, useNavigate } from "react-router-dom";




export default function LessonTypes() {
  const navigate = useNavigate();
  return (
    <section className="py-10 sm:py-16 px-2 sm:px-4 bg-black w-full flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">Offering Lessons in a variety of disciplines</h2>
        <div className="lesson-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {lessons.map(({ title, description }) => (
            <div
              key={title}
              className="lesson-box bg-gray-900 border border-white rounded-lg p-6 flex flex-col items-center shadow hover:scale-105 transition cursor-pointer mx-auto"
              onClick={() => navigate("/book", { state: { lessonType: title } })}
            >
              <h3 className="lesson-title text-lg sm:text-xl font-semibold text-white mb-2 text-center">{title}</h3>
              <p className="lesson-desc text-sm sm:text-base text-gray-200 mb-4 text-center">{description}</p>
              <button className="lesson-btn bg-white text-black font-bold py-1 px-4 rounded hover:bg-gray-200 transition w-full sm:w-auto">Read More & Book</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}