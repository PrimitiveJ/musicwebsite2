export default function MusicProductionLesson() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Music Production Lessons</h1>
      <p className="mb-6 max-w-xl text-center">Produce tracks using DAWs like Ableton or FL Studio — recording, editing, mixing. All experience levels welcome. Book a lesson and start producing your own music!</p>
             <Link to="/book" className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">Book a Music Production Lesson</Link>
    </section>
  );
}
