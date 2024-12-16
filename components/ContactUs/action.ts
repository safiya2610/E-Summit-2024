'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
    })
    

    if (!response.ok) {
      const errorData = await response.json()
      return { success: false, errors: { api: errorData.error || "Something went wrong!" } }
    }

    const responseData = await response.json()
    return { success: true, message: responseData.message }
  } catch (error) {
    return { success: false, errors: { api: "An unexpected error occurred. Please try again later." } }
  }
}
