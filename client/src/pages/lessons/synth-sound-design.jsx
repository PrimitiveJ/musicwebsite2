export default function SynthSoundDesignLesson() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Synth & Sound Design Lessons</h1>
      <p className="mb-6 max-w-xl text-center">Learn how to build your own unique sounds using synthesizers and effects. Explore subtractive, FM, and modular synthesis. Book a lesson and shape your sound!</p>
            <Link to="/book" className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">Book a Synth & Sound Design Lesson</Link>
    </section>
  );
}
