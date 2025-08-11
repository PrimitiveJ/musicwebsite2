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
    <section className="py-16 px-4 bg-black w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Offering Lessons in a variety of disciplines</h2>
        <div className="lesson-row">
          {lessons.map(({ title, description }) => (
            <div
              key={title}
              className="lesson-box"
              onClick={() => navigate("/book", { state: { lessonType: title } })}
            >
              <h3 className="lesson-title">{title}</h3>
              <p className="lesson-desc">{description}</p>
              <button className="lesson-btn">Read More & Book</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}