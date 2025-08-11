

export default function About() {
  return (
  <section className="min-h-screen bg-black text-white flex items-center justify-center pb-6 px-4 font-[Open Sans]" style={{paddingTop: '0'}}>
    <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center bg-[#18181b] border-2 border-blue-500 rounded-2xl shadow-2xl p-0 md:p-0 overflow-hidden">
  <div className="w-full flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2 p-0 md:p-2">
        {/* Profile Card */}
  <div className="flex-shrink-0 flex flex-col items-center justify-center bg-black bg-opacity-80 border-2 border-blue-500 rounded-2xl shadow-lg p-0 md:p-0">
          <img
            src="/jamesprofilepic.jpg"
            alt="James Hoke profile"
            className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover shadow m-0"
            style={{objectPosition: 'top'}}
          />
          <div className="text-center m-0">
            <h3 className="text-xl font-bold text-blue-400 font-[Montserrat] m-0">James Hoke</h3>
            <p className="text-sm text-gray-300 m-0">Multi-Instrumentalist, Audio Engineer, & DJ</p>
          </div>
        </div>
        {/* Main Content - moved closer */}
  <div className="flex-1 flex flex-col justify-center items-center m-0 p-0">
          <h1 className="text-6xl md:text-7xl font-extrabold m-0 text-center drop-shadow-lg tracking-tight font-[Montserrat] text-white">About</h1>
          <h2 className="text-5xl md:text-6xl font-extrabold m-0 text-center drop-shadow-lg tracking-tight font-[Montserrat] text-white">My Teaching Style</h2>
          <p className="text-2xl md:text-3xl font-semibold text-center text-white m-0 hero-desc" style={{maxWidth: '700px'}}>
            With over <span className="font-bold text-blue-400">26 years</span> of experience as a musician, I have performed in orchestras, toured with bands across the country, and released several successful self-produced solo projects. My journey has taken me from classical ensembles to the vibrant world of live bands and the creative freedom of solo artistry.
          </p>
          <p className="text-xl md:text-2xl text-blue-200 text-center m-0 hero-desc" style={{maxWidth: '650px'}}>
            In addition to my work as a multi-instrumentalist, I have extensive experience as a <span className="font-bold text-blue-400">DJ in Raleigh, NC</span>, performing at clubs, private events, and festivals. My diverse background allows me to connect with students of all ages and skill levels, offering a unique perspective on music performance, production, and creativity.
          </p>
          <p className="text-xl md:text-2xl text-blue-200 text-center m-0 hero-desc" style={{maxWidth: '650px'}}>
            My teaching style is rooted in <span className="font-bold text-blue-400">patience, encouragement, and passion</span> for helping others discover their own musical voice. Whether you are just starting out or looking to refine your skills, I am dedicated to guiding you on your musical journey.
          </p>
          <a href="/lessons" className="hero-btn m-0">Book a Lesson</a>
        </div>
      </div>
    </div>
  </section>
  );
}