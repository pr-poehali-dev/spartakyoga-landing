import { useState } from "react";
import { reachGoal } from "@/lib/metrika";

const FORM_URL = "https://functions.poehali.dev/bf54092e-43e5-4114-9ade-aa9f3a5b54a2";

const formatPhone = (raw: string): string => {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7")) digits = "7" + digits;
  digits = digits.slice(0, 11);
  const d = digits.slice(1);
  let result = "+7";
  if (d.length === 0) return result;
  result += " (" + d.slice(0, 3);
  if (d.length < 3) return result;
  result += ") " + d.slice(3, 6);
  if (d.length < 6) return result;
  result += "-" + d.slice(6, 8);
  if (d.length < 8) return result;
  result += "-" + d.slice(8, 10);
  return result;
};

const isPhoneValid = (value: string) => value.replace(/\D/g, "").length === 11;

interface LeadFormProps {
  source?: string;
  goal?: string;
  dark?: boolean;
}

export default function LeadForm({ source = "spartak.space", goal = "lead", dark = false }: LeadFormProps) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPhoneValid(phone) || loading) return;
    setLoading(true);
    try {
      await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, message: `Заявка с ${source}` }),
      });
      reachGoal(goal);
    } catch {
      // отправка могла пройти
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  if (sent) {
    return (
      <p className={`text-sm font-medium ${dark ? "text-[#86efac]" : "text-[#2d4a1e]"}`}>
        Заявка принята — отвечу в течение часа.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-sm mx-auto">
      <input
        type="tel"
        inputMode="numeric"
        placeholder="+7 ..."
        value={phone}
        onChange={(e) => setPhone(formatPhone(e.target.value))}
        onFocus={() => { if (!phone) setPhone("+7 ("); }}
        maxLength={18}
        required
        className={`flex-1 border rounded-full px-4 py-3 text-sm focus:outline-none transition-colors ${
          dark
            ? "border-white/20 bg-white/10 text-white placeholder-white/40 focus:border-white/50"
            : "border-[#d6d3d1] bg-white text-[#1c1917] placeholder-[#a8a29e] focus:border-[#2d4a1e]"
        }`}
      />
      <button
        type="submit"
        disabled={!isPhoneValid(phone) || loading}
        style={{ borderRadius: "100px", backgroundColor: "#2d4a1e" }}
        className="px-6 py-3 text-white text-sm font-medium hover:opacity-90 disabled:opacity-40 transition-all whitespace-nowrap"
      >
        {loading ? "..." : "Записаться"}
      </button>
    </form>
  );
}
