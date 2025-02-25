"use client";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
  };

  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Contactez-nous
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
          Une question ou une suggestion ? Nous serions ravis d’échanger avec vous !
        </p>
        <form onSubmit={handleSubmit} className=" bg-gray-100 p-8 lg:mx-44 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-3 px-6 rounded-full w-full hover:bg-orange-600 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
