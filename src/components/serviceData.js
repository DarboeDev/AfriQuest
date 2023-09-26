import jungle from '/src/assets/jungle.jpg'
import mountain from '/src/assets/kilimanjaro.jpg'
import adventure from '/src/assets/adventure.jpg'
import culture from '/src/assets/culture.jpeg'
export const serviceCategories = [
    {
      id: 1,
      image: adventure,
      name: 'Adventure Tours',
      description: 'Explore thrilling adventures in exotic destinations.',
    },
    {
      id: 2,
      image: culture,
      name: 'Cultural Tours',
      description: 'Immerse yourself in rich cultural experiences.',
    },
  ];
  
  export const serviceListings = [
    {
      id: 1,
      categoryId: 1, // Adventure Tours
      title: 'Jungle Expedition',
      description: 'An adrenaline-packed journey through lush jungles.',
      duration: '7 days',
      price: '$1,200',
      image: jungle, 
    },
    {
      id: 2,
      categoryId: 1, // Adventure Tours
      title: 'Mountain Trek',
      description: 'Conquer towering peaks with our expert guides.',
      duration: '10 days',
      price: '$1,800',
      image: mountain, 
    },
  ];