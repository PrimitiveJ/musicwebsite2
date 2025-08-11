export default function GuitarLesson() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Guitar Lessons</h1>
      <p className="mb-6 max-w-xl text-center">Master acoustic and electric guitar with focus on technique, rhythm, and improvisation. Suitable for all levels, from beginner to advanced. Book a lesson to start your musical journey!</p>
  <a href="/book" className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">Book a Guitar Lesson</a>
    </section>
  );
}
