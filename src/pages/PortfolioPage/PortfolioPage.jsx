
import  { useState } from 'react';
import { Container, ExpandButton, GridGallery, GridItem, Image, TabButton, TabItem, TabList, Title } from './PortfolioPage.styled';
import { motion } from "framer-motion";

// Категорії для табів
const categories = [
    { id: 'objects', label: 'Природа' },
  { id: 'portrait', label: 'Портрети' },
  { id: 'brands', label: 'Сімейні' },
  
  { id: 'events', label: 'Заходи' }
];


const initialPhotos = [
  { id: 1, category: 'events', src: 'https://images.unsplash.com/photo-1519741497674-611481863552', type: 'small', alt: 'Весілля пара' },
  { id: 2, category: 'events', src: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6', type: 'small', alt: 'Наречена біля вікна' },
  { id: 3, category: 'portrait', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', type: 'wide', alt: 'Портрет дівчини в кашкеті' },
  { id: 4, category: 'portrait', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', type: 'tall', alt: 'Обійми на пероні' },
  // Додаткові фото для демонстрації фільтру та кнопки "Показати ще"
  { id: 5, category: 'brands', src: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7', type: 'small', alt: 'Бренд зйомка' },
  { id: 6, category: 'objects',src: `${import.meta.env.BASE_URL}images/img4.JPG`, type: 'small', alt: 'Предметний кадр' },
    { id: 7, category: 'objects', src: `${import.meta.env.BASE_URL}images/img5.JPG`, type: 'small', alt: 'Предметний кадр' },
        { id: 8, category: 'objects', src: `${import.meta.env.BASE_URL}images/img7.JPG`, type: 'tall', alt: 'Предметний кадр' },
            { id: 9, category: 'objects', src: `${import.meta.env.BASE_URL}images/img9.JPG`, type: 'wide', alt: 'Предметний кадр' },
             { id: 10, category: 'objects', src: `${import.meta.env.BASE_URL}images/img10.JPG`, type: 'wide', alt: 'Предметний кадр' },
                          { id: 11, category: 'objects', src: `${import.meta.env.BASE_URL}images/img3.JPG`, type: 'wide', alt: 'Предметний кадр' },



];

export const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('objects');
  const [visibleCount, setVisibleCount] = useState(4); 

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setVisibleCount(4); 
  };

  // Фільтрація
  const filteredPhotos = activeTab === 'all' 
    ? initialPhotos 
    : initialPhotos.filter(photo => photo.category === activeTab);




  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

const firstBlock = displayedPhotos.slice(0, 4);
const restBlock = displayedPhotos.slice(4);
  return (
    <Container>
        <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    ease: "easeOut"
  }}
>
      <Title>Портфоліо</Title>
      
      {/* Навігація по категоріях */}
      <TabList>
        {categories.map((tab) => (
          <TabItem key={tab.id}>
            <TabButton
              $isActive={activeTab === tab.id} 
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </TabButton>
          </TabItem>
        ))}
      </TabList>

  
<GridGallery className="asymmetric">
  {firstBlock.map((photo) => (
    <GridItem key={photo.id} $type={photo.type} $layout="asymmetric">
      <Image loading="lazy" src={photo.src} alt={photo.alt} />
    </GridItem>
  ))}
</GridGallery>
{/* 🟨 РЕШТА — проста 2x2 */}
{restBlock.length > 0 && (
 
 
 <GridGallery className="simple">
    {restBlock.map((photo) => (
      <GridItem key={photo.id} $layout="simple">
        <Image loading="lazy" src={photo.src} alt={photo.alt} />
      </GridItem>
    ))}
  </GridGallery>
)}

      {filteredPhotos.length > visibleCount && (
        <ExpandButton onClick={() => setVisibleCount(prev => prev + 4)}>
          Показати ще ↓
        </ExpandButton>
      )}
      </motion.div>

    </Container>
  );
};

