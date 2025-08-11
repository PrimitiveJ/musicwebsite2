export default function Lessons() {
  return (
  <section className="min-h-screen bg-black text-white flex items-center justify-center pb-6 px-4" style={{paddingTop: '0'}}>
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center bg-[#18181b] border-2 border-blue-500 rounded-2xl shadow-2xl p-10 mb-8">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-center drop-shadow-2xl tracking-tight font-[Montserrat] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 text-white">Lessons</h1>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-2xl md:text-3xl text-white text-center mb-6 font-[Open Sans]" style={{maxWidth: '700px'}}>
            Whether you're a beginner or an advanced musician, lessons are tailored to your goals and interests. Expect a supportive, creative environment with a focus on technique, musicality, and personal growth.
          </p>
          <ul className="w-full max-w-xl mx-auto list-disc list-inside space-y-4 text-xl md:text-2xl text-blue-200 text-left mb-8">
            <li>Lessons: <span className="font-bold text-blue-400">$65 per hour</span></li>
            <li>Month-long plans available for guaranteed weekly slots and savings</li>
            <li>Flexible scheduling for single or recurring lessons</li>
          </ul>
          <p className="text-xl md:text-2xl text-blue-200 text-center mb-4 font-[Open Sans]" style={{maxWidth: '650px'}}>
            Choose from a variety of lesson types: <span className="font-bold text-blue-400">Guitar, Bass, Violin, Piano, DJing, Music Production, Songwriting, Synth & Sound Design</span>.
          </p>
          <p className="text-xl md:text-2xl text-blue-200 text-center mb-8 font-[Open Sans]" style={{maxWidth: '650px'}}>
            Ready to get started? Book a single lesson or reserve a month-long package for the best value and guaranteed time slots.
          </p>
          <a href="/book" className="hero-btn mt-2">Book Now</a>
        </div>
      </div>
    </section>
  );
}