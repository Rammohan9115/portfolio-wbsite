import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='
      mb-10 px-4 text-center text-gray-500 '>
        <small className='mb-2 block text-xs'>
            &copy; 2023 Rammohan all rights reserved.
        </small>
        <p className="text-xs">
            <span className='font-semibold'>About this website</span>
            built with react & Next.js (App Router & Server Actions), TypeScript,
            Tailwind css, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </footer>
    </div>
  )
}
