"use client"
import { useState, useContext } from 'react';
// import emailjs from '@emailjs/browser';
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';

export default function Contact() {

  const [form, setForm] = useState({
    about: 'web-development',
    other: '',
    email: '',
    title: '',
    text: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleChange = (event:any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleOther = () => {
    setForm({ ...form, about: 'other' });
  };

  const SnsForm = () => {
    return (
      <div
        className="bg-gray-100 p-1.5 rounded-b-lg mt-2.5"
      >
        <div className="flex flex-row justify-around">
          <a
            href="https://www.linkedin.com/in/dujin-kim/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-blue-600"
            aria-label="Connect on LinkedIn"
          >
            <BsLinkedin size="28px" />
          </a>
          <a
            href="https://github.com/DuLoops"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-purple-600 "
            aria-label="Opensource on Github"
          >
            <BsGithub size="32px" />
          </a>
          <a
            href="https://www.strava.com/athletes/dujinkim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-red-600"
            aria-label="Let's share our adventures on Strava"
          >
            <BsYoutube size="28px" />
          </a>
          <a
            href="https://www.instagram.com/dujinkim_/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-pink-600"
            aria-label="Connect on Instagram"
          >
            <BsInstagram size="28px" />
          </a>
        </div>
      </div>
    );
  };

  const ErrorAlert = () => {
    return (
      <div className="flex items-center bg-red-500  text-sm font-bold px-4 py-3" role="alert">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 6a1.5 1.5 0 00-1 2.65V12a1 1 0 002 0V8.65A1.5 1.5 0 0010 6z" />
        </svg>
        <p>Message did not send! Check your internet connection.</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-center text-2xl md:text-4xl border-b-2 pb-2 mb-8 md:mb-16">Contact</h1>
      {submitted ? (
        <div className="m-5 rounded-xl bg-gray-100 p-8">
          <p className="text-xl text-center font-medium py-5">
            Thank you for reaching me!
            <br />
            I will get back to you shortly!
          </p>
          <SnsForm />
        </div>
      ) : (
        <form 
        // onSubmit={handleSubmit}
        >
          <div className="bg-gray-300 dark:bg-gray-800 rounded-lg max-w-4xl mx-auto p-5 md:p-10">
            <div className="md:w-1/2 float-left p-2.5">
              <p className="my-2.5 text-center">
                Email:&nbsp;
                <a href="mailto:contact@dujinkim.com" className="text-blue-500">
                  contact@dujinkim.com
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2.5 p-2.5 justify-evenly">
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300">Email</span>
                <input
                  className="form-input mt-1 block w-full"
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300">Title</span>
                <input
                  className="form-input mt-1 block w-full"
                  value={form.title}
                  onChange={handleChange}
                  name="title"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300">Message</span>
                <textarea
                  className="form-textarea mt-1 block w-full"
                  value={form.text}
                  onChange={handleChange}
                  name="text"
                  required
                />
              </label>
              <button
                type="submit"
                className="mt-4 bg-green-500  rounded py-2.5 px-5"
              >
                {!loading ? 'Send Message' : <div className="spinner"></div>}
              </button>
            </div>
            <div className="clear-both" />
            {alert && <ErrorAlert />}
            <SnsForm />
          </div>
        </form>
      )}
    </div>
  );
}
