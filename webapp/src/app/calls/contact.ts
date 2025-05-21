const URL = 'https://contact-ldgqw3kyla-uc.a.run.app'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'Bri Nicole',
      send: 'bri.burkley21@gmail.com',
      cc: 'george8794@gmail.com',
      ...data,
    }),
  })
  if (!res.ok) {
    throw new Error('Failed to submit contact form')
  }
}