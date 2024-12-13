"use client";
import { keyframes } from '@emotion/react';
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const styles = {
  fadeInUp: {
    animation: `${fadeInUp} 0.5s ease-out`
  }
};  

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitContactForm } from './action'

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

type FormValues = z.infer<typeof schema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ title: string; description: string } | null>(null)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema)
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => formData.append(key, value))
    
    const result = await submitContactForm(formData)
    
    setIsSubmitting(false)
    if (result.success) {
      setToast({
        title: "Success",
        description: result.message || "Your message has been sent successfully!"
      })
      reset()
    } else {
      setToast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again."
      })
    }

    setTimeout(() => setToast(null), 5000) // Hide toast after 5 seconds
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
              Get in touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Have a question about our events or want to collaborate? We'd love to hear from you.
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-12">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white transition duration-200"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white transition duration-200"
                  placeholder="Your email"
                />
                {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
              <input
                {...register('subject')}
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white transition duration-200"
                placeholder="What's this about?"
              />
              {errors.subject && <p className="text-sm text-red-400">{errors.subject.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white transition duration-200"
                placeholder="Your message"
              ></textarea>
              {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-200 ease-in-out transform hover:scale-105"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="grid gap-8 sm:grid-cols-2 pt-12 border-t border-gray-800 mt-12">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold mb-4">Email Us</h2>
              <p className="text-gray-400 text-lg">ecell@iiitl.ac.in</p>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
              <p className="text-gray-400 text-lg">
                E-Cell Office<br />
                IIIT Lucknow Campus<br />
                Uttar Pradesh 226002
              </p>
            </div>
          </div>
        </div>
      </div>
      {toast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-6 rounded-md shadow-lg animate-fade-in-up" style={styles.fadeInUp}>
          <h3 className="font-bold text-lg mb-2">{toast.title}</h3>
          <p className="text-gray-300">{toast.description}</p>
        </div>
      )}
    </div>
  )
}

