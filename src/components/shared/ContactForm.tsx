"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { links } from "@/data/links";
import { hasUrl } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyForm: FormState = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "no-backend">("idle");

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your email.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Enter a subject.";
    if (!form.message.trim()) next.message = "Write a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // No backend or email service is wired up in this template — be
    // honest about that instead of pretending the message was sent.
    setStatus("no-backend");
  }

  const mailtoHref = hasUrl(links.email)
    ? `mailto:${links.email}?subject=${encodeURIComponent(
        form.subject || "Hello"
      )}&body=${encodeURIComponent(form.message || "")}`
    : undefined;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          name="contact-name"
          value={form.name}
          onChange={update("name")}
          error={errors.name}
        />
        <Field
          label="Email"
          name="contact-email"
          type="email"
          value={form.email}
          onChange={update("email")}
          error={errors.email}
        />
      </div>
      <Field
        label="Subject"
        name="contact-subject"
        value={form.subject}
        onChange={update("subject")}
        error={errors.subject}
      />
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-xs text-ink-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={form.message}
          onChange={update("message")}
          className="w-full rounded-md border border-border bg-bg-raised px-3 py-2 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-accent-amber">{errors.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          Send Message
        </button>
        {mailtoHref && (
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent-blue/60 hover:text-accent-blue"
          >
            <Mail size={14} aria-hidden="true" />
            Email me directly
          </a>
        )}
      </div>

      {status === "no-backend" && (
        <p role="status" className="rounded-md border border-border bg-bg-raised px-3 py-2 text-xs text-ink-muted">
          This form isn&apos;t wired up to a backend or email service yet, so nothing was
          actually sent. Use &ldquo;Email me directly&rdquo; above, or connect a service like
          Formspree, Resend, or an API route — see the README.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs text-ink-muted">
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-border bg-bg-raised px-3 py-2 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        aria-invalid={!!error}
      />
      {error && <p className="mt-1 text-xs text-accent-amber">{error}</p>}
    </div>
  );
}
