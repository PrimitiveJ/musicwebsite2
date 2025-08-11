// ...existing code...

export default function Booking() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl flex flex-col items-center gap-6 mb-12 bg-[#18181b] border-2 border-white rounded-2xl shadow-2xl p-10">
        <h1 className="text-5xl font-extrabold mb-10 tracking-tight text-center drop-shadow-lg">Book a Lesson</h1>
        <p className="mb-2 text-xl font-semibold text-center text-white">Please select your preferred date and time using the calendar below.<br className='hidden md:block'/> All bookings are managed in real-time with our availability.</p>
        <iframe
          src="https://cal.com/cj-hoke-x19rwf"
          width="100%"
          height="700"
          style={{ border: "2px solid white", borderRadius: "1rem", background: "#18181b" }}
          title="Book with Cal.com"
          allow="camera; microphone; fullscreen; speaker"
        ></iframe>
      </div>
    </section>
  );
}
