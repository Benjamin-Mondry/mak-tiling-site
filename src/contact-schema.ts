import { z } from 'zod'

export const quoteFormSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(80, 'Name is too long.'),
  email: z.email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(8, 'Please enter a valid phone number.')
    .max(30, 'Phone number is too long.'),
  suburb: z.string().trim().min(2, 'Please enter your suburb or area.').max(80, 'Suburb is too long.'),
  service: z.string().trim().min(2, 'Please select the type of work.').max(80, 'Service is too long.'),
  message: z
    .string()
    .trim()
    .min(20, 'Please add a few details about the project.')
    .max(1500, 'Project details are too long.'),
  company: z.string().trim().max(0).optional(),
})

export type QuoteFormValues = z.infer<typeof quoteFormSchema>
