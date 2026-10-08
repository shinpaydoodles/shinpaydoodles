import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { type FormEvent, useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { contact } from "../data/contact";
import { professionalLinks } from "../data/professionalLinks";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

export function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  useRevealAnimation(ref);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const body = `From: ${fields.name} (${fields.email})\n\n${fields.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div ref={ref} className="space-y-8 pb-20">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s work together"
        description="Have a role, product, or technical problem that fits my experience? Send the details and I’ll take a look."
      />
      <div className="grid gap-8 xl:grid-cols-[.8fr_1.2fr]">
        <section
          data-reveal
          className="border-l-4 border-blue-400 bg-slate-950 p-6 text-white sm:p-8"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-blue-300">
            Direct contact
          </p>
          <h2 className="mt-2 text-2xl font-bold">Luis Miguel Benico</h2>
          <div className="mt-8 space-y-5">
            <ContactLine
              icon={Mail}
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactLine
              icon={Phone}
              label="Phone"
              value={contact.phone}
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
            />
            <ContactLine
              icon={MapPin}
              label="Location"
              value={contact.location}
            />
            <ContactLine
              icon={Linkedin}
              label="LinkedIn"
              value="View professional profile"
              href={contact.linkedIn}
            />
            <ContactLine
              icon={Github}
              label="GitHub"
              value="github.com/shinpaydoodles"
              href={contact.github}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={`mailto:${contact.email}`}
              className="bg-white !text-slate-950 hover:bg-blue-50"
            >
              Email me
            </Button>
            <Button
              href={professionalLinks.resumeUrl}
              download={professionalLinks.resumeFileName}
              className="border border-white/25 bg-transparent hover:bg-white/10"
            >
              <Download size={17} />
              Resume
            </Button>
            <Button
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="border border-white/25 bg-transparent hover:bg-white/10"
            >
              GitHub
            </Button>
          </div>
        </section>
        <form
          data-reveal
          onSubmit={submit}
          className="border-t-2 border-slate-900 pt-6 sm:pt-8"
        >
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-950">
              Write a message
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Submitting opens your email app with the message filled in. No
              information is stored on this site.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              value={fields.name}
              onChange={(value) => setFields({ ...fields, name: value })}
              placeholder="Your name"
            />
            <Field
              label="Email"
              name="email"
              value={fields.email}
              onChange={(value) => setFields({ ...fields, email: value })}
              type="email"
              placeholder="you@company.com"
            />
            <div className="sm:col-span-2">
              <Field
                label="Subject"
                name="subject"
                value={fields.subject}
                onChange={(value) => setFields({ ...fields, subject: value })}
                placeholder="Role or project"
              />
            </div>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Message
              </span>
              <textarea
                required
                rows={6}
                value={fields.message}
                onChange={(event) =>
                  setFields({ ...fields, message: event.target.value })
                }
                className="w-full border border-slate-300 bg-transparent px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Share a few useful details..."
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex min-h-11 items-center gap-2 bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Open email app <ArrowUpRight size={17} />
          </button>
        </form>
      </div>
    </div>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/10">
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wide text-blue-200">
          {label}
        </span>
        <span className="mt-1 block break-all text-sm font-semibold">
          {value}
        </span>
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-white"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-3">{content}</div>
  );
}
function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder: string;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </span>
      <input
        required
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="min-h-11 w-full border border-slate-300 bg-transparent px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </label>
  );
}
