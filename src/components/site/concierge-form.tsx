"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ConciergeFormProps {
  service?: string;
  compact?: boolean;
}

export function ConciergeForm({ service = "general-inquiry", compact = false }: ConciergeFormProps) {
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

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white/10 border border-white/20 p-6 text-center space-y-2">
        <div className="text-3xl">✓</div>
        <p className="font-display text-lg font-semibold text-white">You're on our list.</p>
        <p className="text-sm text-white/80">We'll reach out within 24 hours to start planning your Napa experience.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="sr-only">First Name</label>
          <Input
            name="firstName"
            placeholder="First Name *"
            value={form.firstName}
            onChange={handleChange}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A84C] focus:ring-[#C9A84C]"
          />
        </div>
        <div>
          <label className="sr-only">Last Name</label>
          <Input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A84C] focus:ring-[#C9A84C]"
          />
        </div>
      </div>
      <Input
        name="email"
        type="email"
        placeholder="Email Address *"
        value={form.email}
        onChange={handleChange}
        required
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A84C] focus:ring-[#C9A84C]"
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={handleChange}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A84C] focus:ring-[#C9A84C]"
      />
      {!compact && (
        <Textarea
          name="message"
          placeholder="How can we help plan your Napa experience?"
          value={form.message}
          onChange={handleChange}
          rows={3}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A84C] focus:ring-[#C9A84C] resize-none"
        />
      )}
      {status === "error" && (
        <p className="text-sm text-red-300">Something went wrong. Please try again or email jeff@nvproperties.net.</p>
      )}
      <Button
        type="submit"
        disabled={status === "loading"}
        variant="gold"
        className="w-full"
      >
        {status === "loading" ? "Sending…" : "Plan My Napa Experience"}
      </Button>
      <p className="text-[11px] text-white/50 text-center">No obligation. We respond within 24 hours.</p>
    </form>
  );
}
