import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] font-golos py-16">
      <div className="max-w-3xl mx-auto px-5">
        <Link to="/" className="text-[#2d4a1e] text-sm hover:underline">
          ← На главную
        </Link>
        <h1 className="font-cormorant text-4xl font-semibold text-[#1c1917] mt-6 mb-8">
          Политика конфиденциальности
        </h1>
        <div className="text-[#3a3a32] text-[15px] leading-relaxed space-y-4">
          <p>
            Оставляя заявку на сайте, вы соглашаетесь на обработку персональных данных
            (имя, телефон) с целью связи по вашему обращению.
          </p>
          <p>
            Данные используются исключительно для обратной связи и подготовки коммерческого
            предложения. Мы не передаём ваши данные третьим лицам и не используем их для
            рассылок без вашего согласия.
          </p>
          <p>
            Вы можете отозвать согласие на обработку данных, написав на почту
            almaznayaspina@gmail.com.
          </p>
          <p>© 2026 Спартак Захаров</p>
        </div>
      </div>
    </div>
  );
}
