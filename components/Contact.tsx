"use client"
import React, { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/ActiveSection';
import { useInView } from 'react-intersection-observer';
import { sendEmail } from '@/actions/SendEmail';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Contact');
    }
  }, [inView, setActiveSection]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.currentTarget);
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success('Email sent successfully!');
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please Contact me directly at{' '}
        <a className="underline" href="mailto:rammohan.rameez@gmail.com">
          rammohan.rameez@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        onSubmit={handleSubmit} // Use onSubmit event handler for form submission
        className="mt-10 flex flex-col dark:text-white/80"
      >
        <input
          name="senderEmail"
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Message"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full
         outline-none transition-all focus-scale-110 hover:scale-110 hover:bg-gray-950
         active:scale-105 dark:bg-white dark:bg-opacity-10"
        >
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all 
         group-hover:translate-x-1
         group-hover:-translate-y-1"
          />
        </button>
      </form>
    </section>
  );
}
