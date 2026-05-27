import { useState } from 'react';
import * as S from './ContactsPage.styled';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from "framer-motion";

export const ContactsPage = () => {
  const [formData, setFormData] = useState({ name: '', tel: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ name: '', tel: '' });
    console.log(formData);

    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const text = `📸 *Нове замовлення дзвінка!*\n\n👤 *Ім'я:* ${formData.name}\n📞 *Телефон:* ${formData.tel}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'Markdown', // щоб текст був жирним
          }),
        }
      );

      if (response.ok) {
        toast.info(`Дякую, ${formData.name}! Я зв'яжусь з вами.`, {
          icon: false,
        });
        setFormData({ name: '', tel: '' });
      } else {
        toast('Помилка відправки. Спробуйте ще раз.');
      }
    } catch (error) {
      console.error('Помилка:', error);
      alert('Щось пішло не так...');
    }
  };

  return (
    <S.SectionContainer>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

        <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  ease: "easeOut"
                }}
              >
      <S.Title>Контакти</S.Title>

      <S.FlexWrap>
        {/* Ліва частина: Форма */}
        <S.FormColumn>
          <S.Subtitle>
            Бажаєте замовити фотосесію або є індивідуальна ідея? Залиште свій
            номер і ми обговоримо всі деталі.
          </S.Subtitle>
          <S.Form onSubmit={handleSubmit}>
            <S.Input
              type="text"
              placeholder="Ваше ім'я"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <S.Input
              type="tel"
              placeholder="Номер телефону"
              value={formData.tel}
              onChange={(e) =>
                setFormData({ ...formData, tel: e.target.value })
              }
              required
            />

            <S.Button type="submit">Надіслати</S.Button>
          </S.Form>
        </S.FormColumn>

        {/* Права частина: Фото, Локація та Іконки соцмереж */}
        <S.InfoColumn>
          <S.ImageWrapper>
            <S.ContactImage
            loading="lazy"
              src={`${import.meta.env.BASE_URL}images/img4.JPG`}
              alt="Mary I Photography"
            />{' '}
          </S.ImageWrapper>

          <S.MetaRow>
            <S.LocationBlock>
              <S.MetaLabel>Локація</S.MetaLabel>
              <S.LocationText>Київ — Конотоп</S.LocationText>
            </S.LocationBlock>

            <S.SocialBlock>
          <S.MetaLabel>Зв&apos;язок</S.MetaLabel>
              <S.IconGroup>
                {/* Instagram */}
                <S.IconLink
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </S.IconLink>

                {/* Telegram */}
                <S.IconLink
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </S.IconLink>

                {/* Email (Конверт) */}
                <S.IconLink href="mailto:info@example.com" aria-label="Email">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </S.IconLink>
              </S.IconGroup>
            </S.SocialBlock>
          </S.MetaRow>
        </S.InfoColumn>
      </S.FlexWrap>
      </motion.div>
    </S.SectionContainer>
  );
};
