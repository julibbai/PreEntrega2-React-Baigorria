const products = [
  {
    id: "1",
    name: "lamparaA",
    img: "",
    price: 200,
    category: "interior",
    description: "la mejor lampara",
    stock: 10,
  },
  {
    id: "2",
    name: "lamparaB",
    img: "",
    price: 850,
    category: "exterior",
    description: "la lampara de afuera",
    stock: 6,
  },

  {
    id: "3",
    name: "lamparaC",
    img: "",
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
