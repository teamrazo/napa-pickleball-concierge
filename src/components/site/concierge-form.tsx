'use client';
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ConciergeFormProps {
  service?: string;
  compact?: boolean;
  dark?: boolean;
}

export function ConciergeForm({ service = "general-inquiry", compact = false, dark = false }: ConciergeFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/concierge-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Unified styling — dark vs light mode variants
  const labelClass = "block text-xs font-semibold uppercase tracking-widest mb-1 " +
    (dark ? "text-foreground/65" : "text-white/70");

  const inputClass = "h-10 rounded-lg border text-sm " +
    (dark
      ? "bg-white/70 border-primary/20 text-foreground placeholder:text-foreground/35 focus:border-primary focus:ring-1 focus:ring-primary"
      : "bg-white/12 border-white/20 text-white placeholder:text-white/45 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]");

  const textareaClass = "rounded-lg border text-sm resize-none " +
    (dark
      ? "bg-white/70 border-primary/20 text-foreground placeholder:text-foreground/35 focus:border-primary focus:ring-1 focus:ring-primary"
      : "bg-white/12 border-white/20 text-white placeholder:text-white/45 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]");

  const titleClass = "font-display text-xl font-semibold mb-4 " +
    (dark ? "text-primary" : "text-white");

  const subtextClass = "text-[11px] text-center " +
    (dark ? "text-foreground/40" : "text-white/45");

  const errorClass = "text-sm " +
    (dark ? "text-red-600" : "text-red-300");

  if (status === "success") {
    return (
      <div className={`rounded-2xl p-8 text-center space-y-3 ${dark ? "bg-primary/5 border border-primary/20" : "bg-white/10 border border-white/20"}`}>
        <CheckCircle2 className="size-12 text-accent mx-auto" />
        <p className={`font-display text-xl font-semibold ${dark ? "text-primary" : "text-white"}`}>
          You&apos;re on our list.
        </p>
        <p className={`text-sm leading-6 ${dark ? "text-foreground/60" : "text-white/75"}`}>
          Our concierge team will reach out within 24 hours to start planning your Wine Country experience.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <h3 className={titleClass}>Plan your Wine Country experience</h3>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>First Name</label>
          <Input
            name="firstName"
            placeholder="First Name *"
            value={form.firstName}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <Input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email Address</label>
        <Input
          name="email"
          type="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Phone Number (optional)</label>
        <Input
          name="phone"
          type="tel"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {!compact && (
        <div>
          <label className={labelClass}>Tell us about your trip</label>
          <Textarea
            name="message"
            placeholder="How can we help plan your Wine Country experience?"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className={textareaClass}
          />
        </div>
      )}

      {status === "error" && (
        <p className={errorClass}>Something went wrong. Please try again or email info@napasonomawinecountryconcierge.com.</p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        variant="gold"
        className="w-full btn-bounce gap-2"
      >
        <Send className="size-4" />
        {status === "loading" ? "Sending…" : "Plan My Wine Country Experience"}
      </Button>

      <p className={subtextClass}>No obligation. Our team responds within 24 hours.</p>
    </form>
  );
}
