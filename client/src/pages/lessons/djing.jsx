export default function DJingLesson() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">DJing Lessons</h1>
      <p className="mb-6 max-w-xl text-center">Learn beatmatching, mixing, and performance setup using industry-standard gear. Perfect for aspiring DJs and hobbyists. Book a lesson and get the party started!</p>
            <Link to="/book" className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">Book a DJing Lesson</Link>
    </section>
  );
}
