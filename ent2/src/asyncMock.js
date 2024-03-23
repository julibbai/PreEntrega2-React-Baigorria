const products = [
  {
    name: "Lampara Aplique de dos luces",
    img: "https://res.cloudinary.com/dedwpwwti/image/upload/w_300,h_300/v1708890322/lamparaint2_bw3cge.webp",
    price: 850,
    category: "interior",
    description: "Lampara de dos luces, con material de chapa galvanizada",
    stock: 6,
  },

  {
    name: "Farol de pared texturado",
    img: "https://res.cloudinary.com/dedwpwwti/image/upload/w_300,h_300/v1708890322/lampext1_btejml.webp",
    price: 750,
    category: "exterior",
    description:
      "Lampara farol de pared con material texturizado negro de hierro",
    stock: 8,
  },

  {
    name: "Lampara Vintage",
    img: "https://res.cloudinary.com/dedwpwwti/image/upload/w_300,h_300/v1708890322/lampint3_gxxc8g.webp",
    price: 750,
    category: "interior",
    description: "Lampara colgante hecha de algodón y tejido",
    stock: 8,
  },

  {
    name: "Lampara colgante industrial",
    img: "https://res.cloudinary.com/dedwpwwti/image/upload/w_300,h_300/v1708890322/lamparaint1_neszm2.webp",
    price: 750,
    category: "interior",
    description: "Lampara de estilo industrial hecha de metal, color negro",
    stock: 8,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("no hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};
