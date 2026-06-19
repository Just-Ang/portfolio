
import  { useState } from 'react';
import { Container, ExpandButton, GridGallery, GridItem, Image, TabButton, TabItem, TabList, Title } from './PortfolioPage.styled';
import { motion } from "framer-motion";

// Категорії для табів
const categories = [
    { id: 'objects', label: 'Природа' },
  { id: 'portrait', label: 'Портрети' },
  { id: 'family', label: 'Сімейні' },
  
  { id: 'events', label: 'Заходи' }
];


const initialPhotos = [
  { id: 1, category: 'events', src: `${import.meta.env.BASE_URL}images/img5.webp`, type: 'small', alt: 'Весілля пара' },
  { id: 2, category: 'events', src: `${import.meta.env.BASE_URL}images/img5.webp`, type: 'small', alt: 'Наречена біля вікна' },
  { id: 3, category: 'portrait', src: `${import.meta.env.BASE_URL}images/portrait4.webp`, type: 'small', alt: 'Портрет' },
   { id: 4, category: 'portrait', src: `${import.meta.env.BASE_URL}images/portrait2.webp`, type: 'small', alt: 'Портрет ' },
    { id: 5, category: 'portrait', src: `${import.meta.env.BASE_URL}images/portrait1.webp`, type: 'wide', alt: 'Портрет ' },
     { id: 6, category: 'portrait', src: `${import.meta.env.BASE_URL}images/portrait3.webp`, type: 'tall', alt: 'Портрет' },
          { id: 7, category: 'portrait', src: `${import.meta.env.BASE_URL}images/portrait5.webp`, type: 'small', alt: 'Портрет' },
                    { id: 8, category: 'portrait', src: `${import.meta.env.BASE_URL}images/portrait6.webp`, type: 'small', alt: 'Портрет' },

                    { id: 9, category: 'objects', src: `${import.meta.env.BASE_URL}images/nature1.webp`, type: 'small', alt: 'Портрет' },
   { id: 10, category: 'objects', src: `${import.meta.env.BASE_URL}images/nature2.webp`, type: 'small', alt: 'Портрет ' },
    { id: 11, category: 'objects', src: `${import.meta.env.BASE_URL}images/nature4.webp`, type: 'wide', alt: 'Портрет ' },
     { id: 12, category: 'objects', src: `${import.meta.env.BASE_URL}images/nature3.webp`, type: 'tall', alt: 'Портрет' },
          { id: 13, category: 'objects', src: `${import.meta.env.BASE_URL}images/nature5.webp`, type: 'small', alt: 'Портрет' },
                    { id: 14, category: 'objects', src: `${import.meta.env.BASE_URL}images/nature6.webp`, type: 'small', alt: 'Портрет' },


                      { id: 15, category: 'family', src: `${import.meta.env.BASE_URL}images/family1.webp`, type: 'small', alt: 'Портрет' },
   { id: 16, category: 'family', src: `${import.meta.env.BASE_URL}images/family2.webp`, type: 'small', alt: 'Портрет ' },
    { id: 17, category: 'family', src: `${import.meta.env.BASE_URL}images/family4.webp`, type: 'wide', alt: 'Портрет ' },
     { id: 18, category: 'family', src: `${import.meta.env.BASE_URL}images/family3.webp`, type: 'tall', alt: 'Портрет' },
          { id: 19, category: 'family', src: `${import.meta.env.BASE_URL}images/family5.webp`, type: 'small', alt: 'Портрет' },
                    { id: 20, category: 'family', src: `${import.meta.env.BASE_URL}images/family6.webp`, type: 'small', alt: 'Портрет' },









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

