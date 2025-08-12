import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    emailjs.send(
      "service_lis6dfq", // confirmed service ID
      "template_6udm0yo", // updated template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "xoEvjHQQWKlQBLnEF" // confirmed public key
    )
      .then(() => setSent(true))
      .catch((err) => {
        let msg = "There was an error sending your message. Please try again later.";
        if (err && err.text) msg += `\nError: ${err.text}`;
        else if (err && err.message) msg += `\nError: ${err.message}`;
        setError(msg);
      });
  }

  return (
  <section className="min-h-screen bg-black text-white flex items-center justify-center pb-6 px-4" style={{paddingTop: '0'}}>
      <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center bg-[#18181b] border-2 border-white rounded-2xl shadow-2xl p-6 mb-8">
  <h1 className="text-7xl md:text-8xl font-extrabold mb-4 text-center drop-shadow-lg tracking-tight font-[Montserrat] text-white">Contact</h1>
        <p className="font-semibold text-xl mb-2 text-center">Send us a message!</p>
        <p className="mb-6 text-center">Email: <a href="mailto:hokecj@gmail.com" className="underline">hokecj@gmail.com</a></p>
        {sent ? (
          <p className="text-green-400 font-semibold text-center">Thank you for your message! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-2">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black text-white border-2 border-gray-700 focus:border-white focus:ring-2 focus:ring-white transition outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black text-white border-2 border-gray-700 focus:border-white focus:ring-2 focus:ring-white transition outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-black text-white border-2 border-gray-700 focus:border-white focus:ring-2 focus:ring-white transition outline-none"
            />
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button type="submit" className="bg-white text-black font-bold py-2 px-6 rounded shadow hover:bg-gray-200 transition w-full sm:w-auto text-center">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
}