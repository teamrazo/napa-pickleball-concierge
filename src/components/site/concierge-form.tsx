'use client';
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
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

  const labelClass = dark
    ? "block text-xs font-semibold uppercase tracking-widest text-foreground/70 mb-1"
    : "block text-xs font-semibold uppercase tracking-widest text-white/80 mb-1";

  const inputClass = dark
    ? "bg-white/60 border-primary/20 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-primary"
    : "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A84C] focus:ring-[#C9A84C]";

  const titleClass = dark ? "font-display text-xl font-semibold text-primary mb-4" : "font-display text-xl font-semibold text-white mb-4";
  const subtextClass = dark ? "text-[11px] text-foreground/40 text-center" : "text-[11px] text-white/50 text-center";
  const errorClass = dark ? "text-sm text-red-600" : "text-sm text-red-300";

  if (status === "success") {
    return (
      <div className={`rounded-2xl p-6 text-center space-y-2 ${dark ? "bg-primary/5 border border-primary/20" : "bg-white/10 border border-white/20"}`}>
        <CheckCircle2 className="size-10 text-accent mx-auto" />
        <p className={`font-display text-lg font-semibold ${dark ? "text-primary" : "text-white"}`}>You're on our list.</p>
        <p className={`text-sm ${dark ? "text-foreground/60" : "text-white/80"}`}>We'll reach out within 24 hours to start planning your Napa experience.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h3 className={titleClass}>Plan your Napa experience</h3>
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
      <label className={labelClass}>Phone Number (optional)</label>
      <Input
        name="phone"
        type="tel"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
      />
      {!compact && (
        <>
          <label className={labelClass}>Tell us about your trip</label>
          <Textarea
            name="message"
            placeholder="How can we help plan your Napa experience?"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </>
      )}
      {status === "error" && (
        <p className={errorClass}>Something went wrong. Please try again or email jeff@nvproperties.net.</p>
      )}
      <Button
        type="submit"
        disabled={status === "loading"}
        variant="gold"
        className="w-full btn-bounce"
      >
        {status === "loading" ? "Sending…" : "Plan My Napa Experience"}
      </Button>
      <p className={subtextClass}>No obligation. We respond within 24 hours.</p>
    </form>
  );
}
