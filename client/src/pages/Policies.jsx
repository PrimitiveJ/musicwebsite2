export default function Policies() {
  return (
  <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center pb-6 px-4" style={{paddingTop: '0'}}>
      <div className="w-full mx-auto flex flex-col items-center justify-center bg-[#18181b] border-2 border-blue-500 rounded-2xl shadow-2xl p-10"
        style={{maxWidth: '33vw', minWidth: '320px'}}>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-10 text-center drop-shadow-2xl tracking-tight font-[Montserrat] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 text-white">Policies</h1>
  <div className="w-full flex flex-col items-center justify-center gap-16">
          <div className="w-full max-w-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-black rounded-2xl shadow-xl border-2 border-blue-400 p-8 flex flex-col items-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-blue-400 text-center font-[Montserrat]">Privacy Policy</h2>
            <p className="text-xl md:text-2xl text-white text-center leading-relaxed font-[Open Sans]">Your privacy is important to us. We only collect information necessary to provide our services and do not share your data with third parties except as required to process bookings and payments. All client data is stored securely. You may request deletion of your data at any time by contacting us.</p>
          </div>
          <div className="w-full max-w-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-black rounded-2xl shadow-xl border-2 border-blue-400 p-8 flex flex-col items-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-blue-400 text-center font-[Montserrat]">Terms & Conditions</h2>
            <p className="text-xl md:text-2xl text-white text-center leading-relaxed font-[Open Sans]">By booking a lesson, you agree to abide by our studio policies, including payment, cancellation, and conduct expectations. All lessons must be paid in advance. We reserve the right to refuse service for inappropriate behavior or non-payment. For full terms, please contact us directly.</p>
          </div>
          <div className="w-full max-w-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-black rounded-2xl shadow-xl border-2 border-blue-400 p-8 flex flex-col items-center mb-0">
            <h2 className="text-4xl font-bold mb-4 text-blue-400 text-center font-[Montserrat]">Cancellation Policy</h2>
            <p className="text-xl md:text-2xl text-white text-center leading-relaxed font-[Open Sans]">You may cancel or reschedule your lesson up to 24 hours in advance for a full refund or credit. Cancellations within 24 hours of the scheduled lesson may be subject to a fee or forfeiture of payment. Contact us as soon as possible if you need to make changes to your booking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
