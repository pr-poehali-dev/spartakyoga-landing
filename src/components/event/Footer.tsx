import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-[#1c1917] text-white py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="font-cormorant text-3xl font-semibold mb-6">Спартак Захаров</p>
            <div className="flex flex-col gap-3 text-white/70">
              <a href="tel:+79969971527" className="flex items-center gap-3 hover:text-white transition-colors">
                <Icon name="Phone" size={18} className="text-[#86a06f]" />
                +7 996 997 15 27
              </a>
              <a
                href="https://t.me/spartakmihailovich"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Icon name="Send" size={18} className="text-[#86a06f]" />
                @spartakmihailovich
              </a>
              <a
                href="mailto:almaznayaspina@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={18} className="text-[#86a06f]" />
                almaznayaspina@gmail.com
              </a>
            </div>
          </div>

          <div className="md:text-right flex flex-col md:items-end justify-between">
            <a href="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <p className="text-white/40 text-sm mt-6 md:mt-0">© 2026 Спартак Захаров</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
