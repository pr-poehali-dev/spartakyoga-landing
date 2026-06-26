import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { scrollToForm } from "@/components/event/scrollToForm";

const NAV = [
  { label: "Форматы", id: "formats" },
  { label: "Организаторам", id: "organizers" },
  { label: "FAQ", id: "faq" },
  { label: "Контакты", id: "contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f7f5f2]/95 backdrop-blur border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-cormorant text-2xl font-semibold text-[#1c1917] tracking-tight"
        >
          Спартак Захаров
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="text-sm text-[#1c1917]/80 hover:text-[#2d4a1e] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToForm()}
            className="rounded-full bg-[#2d4a1e] text-white text-sm font-medium px-5 py-2.5 hover:bg-[#24401a] transition-colors"
          >
            Обсудить мероприятие
          </button>
        </nav>

        <button
          className="md:hidden text-[#1c1917] p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <Icon name={open ? "X" : "Menu"} size={26} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f7f5f2] border-t border-black/5 px-5 py-4 flex flex-col gap-1 animate-fade-in">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="text-left text-base text-[#1c1917] py-3 border-b border-black/5"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              scrollToForm();
            }}
            className="mt-3 rounded-full bg-[#2d4a1e] text-white text-base font-medium px-5 py-3"
          >
            Обсудить мероприятие
          </button>
        </div>
      )}
    </header>
  );
}
