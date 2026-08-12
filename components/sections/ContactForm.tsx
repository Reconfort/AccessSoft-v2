"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/content/company";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

const projectTypes = [
  "New product",
  "Redesign / rebuild",
  "Automation & AI",
  "Ongoing partnership",
  "Something else",
];

const fieldClasses =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-[15px] text-ink " +
  "placeholder:text-faint transition-colors duration-300 hover:border-muted/60 " +
  "focus:border-accent focus:outline-none";

/**
 * Validation-ready contact form. No backend by design — submitting opens
 * the visitor's email client with a structured, prefilled message to
 * hello@accesssoft.rw. Swap handleSubmit for an API action later.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const subject = `Project inquiry — ${data.get("name")}${
      data.get("company") ? `, ${data.get("company")}` : ""
    }`;
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "—"}`,
      `Email: ${data.get("email")}`,
      `Project type: ${data.get("projectType")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="label-mono mb-2.5 block text-muted">
            Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="label-mono mb-2.5 block text-muted">
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or team"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="label-mono mb-2.5 block text-muted">
            Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-type" className="label-mono mb-2.5 block text-muted">
            Project type *
          </label>
          <select
            id="contact-type"
            name="projectType"
            required
            defaultValue={projectTypes[0]}
            className={`${fieldClasses} appearance-none bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2212%22%20height=%228%22%20viewBox=%220%200%2012%208%22%3E%3Cpath%20d=%22M1%201.5L6%206.5L11%201.5%22%20stroke=%22%235f5f6b%22%20stroke-width=%221.5%22%20fill=%22none%22%20stroke-linecap=%22round%22/%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="label-mono mb-2.5 block text-muted">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What are you building, what isn’t working, or where do you want to go next?"
          className={`${fieldClasses} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <button
          type="submit"
          className="group inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-8 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent-deep active:bg-ink"
        >
          Send inquiry
          <ArrowUpRight className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
        </button>
        <p aria-live="polite" className="text-sm text-muted">
          {submitted
            ? "Your email client should now be open — send when ready."
            : "Opens your email client, addressed to us."}
        </p>
      </div>
    </form>
  );
}
