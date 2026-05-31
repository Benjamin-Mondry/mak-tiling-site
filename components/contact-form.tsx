'use client'

import { useState } from 'react'

import type { QuoteFormValues } from '@/src/contact-schema'

type FormErrors = Partial<Record<keyof QuoteFormValues, string[]>>

const initialValues: QuoteFormValues = {
  name: '',
  email: '',
  phone: '',
  suburb: '',
  service: 'Bathroom tiling',
  message: '',
  company: '',
}

export function ContactForm() {
  const [values, setValues] = useState<QuoteFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  function updateValue<Key extends keyof QuoteFormValues>(key: Key, value: QuoteFormValues[Key]) {
    setValues((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const result = (await response.json()) as {
        ok: boolean
        message: string
        fieldErrors?: FormErrors
      }

      if (!result.ok) {
        setErrors(result.fieldErrors ?? {})
        setStatus({ type: 'error', message: result.message })
        return
      }

      setValues(initialValues)
      setStatus({ type: 'success', message: result.message })
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong while sending your request.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="quote-form" id="quote-form" noValidate onSubmit={handleSubmit}>
      <div className="quote-form-intro">
        <h2>Request a quote</h2>
        <p>Tell us a bit about the project and we’ll get back to you.</p>
      </div>

      <div className="quote-form-grid">
        <label className="form-field">
          <span>Name</span>
          <input
            autoComplete="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(event) => updateValue('name', event.target.value)}
            aria-invalid={Boolean(errors.name?.length)}
            aria-describedby={errors.name?.length ? 'name-error' : undefined}
          />
          {errors.name?.length ? <span className="form-error" id="name-error">{errors.name[0]}</span> : null}
        </label>

        <label className="form-field">
          <span>Email</span>
          <input
            autoComplete="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateValue('email', event.target.value)}
            aria-invalid={Boolean(errors.email?.length)}
            aria-describedby={errors.email?.length ? 'email-error' : undefined}
          />
          {errors.email?.length ? <span className="form-error" id="email-error">{errors.email[0]}</span> : null}
        </label>

        <label className="form-field">
          <span>Phone</span>
          <input
            autoComplete="tel"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => updateValue('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone?.length)}
            aria-describedby={errors.phone?.length ? 'phone-error' : undefined}
          />
          {errors.phone?.length ? <span className="form-error" id="phone-error">{errors.phone[0]}</span> : null}
        </label>

        <label className="form-field">
          <span>Suburb / area</span>
          <input
            autoComplete="address-level2"
            name="suburb"
            type="text"
            value={values.suburb}
            onChange={(event) => updateValue('suburb', event.target.value)}
            aria-invalid={Boolean(errors.suburb?.length)}
            aria-describedby={errors.suburb?.length ? 'suburb-error' : undefined}
          />
          {errors.suburb?.length ? <span className="form-error" id="suburb-error">{errors.suburb[0]}</span> : null}
        </label>

        <label className="form-field form-field-full">
          <span>Type of work</span>
          <select
            name="service"
            value={values.service}
            onChange={(event) => updateValue('service', event.target.value)}
            aria-invalid={Boolean(errors.service?.length)}
            aria-describedby={errors.service?.length ? 'service-error' : undefined}
          >
            <option>Bathroom tiling</option>
            <option>Wet area tiling</option>
            <option>Feature wall tiling</option>
            <option>Large format tiling</option>
            <option>Residential project</option>
            <option>Other</option>
          </select>
          {errors.service?.length ? <span className="form-error" id="service-error">{errors.service[0]}</span> : null}
        </label>

        <label className="form-field form-field-full">
          <span>Project details</span>
          <textarea
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => updateValue('message', event.target.value)}
            aria-invalid={Boolean(errors.message?.length)}
            aria-describedby={errors.message?.length ? 'message-error' : undefined}
          />
          {errors.message?.length ? <span className="form-error" id="message-error">{errors.message[0]}</span> : null}
        </label>

        <label className="form-honeypot" aria-hidden="true" tabIndex={-1}>
          <span>Company</span>
          <input
            name="company"
            type="text"
            value={values.company ?? ''}
            onChange={(event) => updateValue('company', event.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </label>
      </div>

      <div className="quote-form-actions">
        <button className="button button-brand" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send quote request'}
        </button>
      </div>

      {status.type !== 'idle' ? (
        <p className={status.type === 'success' ? 'form-status form-status-success' : 'form-status form-status-error'}>
          {status.message}
        </p>
      ) : null}
    </form>
  )
}
