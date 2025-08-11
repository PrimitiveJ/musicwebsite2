export default function PianoLesson() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Piano Lessons</h1>
      <p className="mb-6 max-w-xl text-center">Foundations of classical and contemporary piano with ear training and theory. Lessons for all ages and abilities. Book a lesson and start playing today!</p>
  <a href="/book" className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">Book a Piano Lesson</a>
    </section>
  );
}
