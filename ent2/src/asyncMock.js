const products = [
  {
    id: "1",
    name: "lamparaA",
    img: "https://res.cloudinary.com/dedwpwwti/image/upload/v1708890322/lampext3_v5fvur.webp",
    price: 200,
    category: "interior",
    description: "la mejor lampara",
    stock: 10,
  },
  {
    id: "2",
    name: "lamparaB",
    img: "https://res.cloudinary.com/dedwpwwti/image/upload/v1708890322/lamparaint1_neszm2.webp",
    price: 850,
    category: "exterior",
    description: "la lampara de afuera",
    stock: 6,
  },

  {
    id: "3",
    name: "lamparaC",
    img: "https://res.cloudinary.com/dedwpwwti/image/upload/v1708890322/lamparaint1_neszm2.webp",
    price: 750,
    category: "interior",
    description: "la lampara de adentro",
    stock: 8,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("no hay productos");
    }
  });
};
