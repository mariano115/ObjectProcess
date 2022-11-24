const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

const auth = (req, res, next) => {
  if (req.session?.email) {
    next();
  } else {
    res.render("login");
  }
};

const fakerProducts = () => {
  const products = [];
  for (let index = 0; index < 5; index++) {
    products.push({
      nombre: faker.commerce.product(),
      precio: faker.commerce.price(),
      foto: faker.image.imageUrl(),
    });
  }
  return products;
};

const generarNumeros = (cant) => {
  const numbers = [];
  for (index = 0; index <= cant; index++) {
    numbers.push(parseInt(Math.random() * 1000 + 1));
  }
  return numbers;
};

const verificar = (numbers) => {
  let objetoNumeros = [];
  let contador = 0;
  let indice;
  for (let j = 1; j <= 20; ) {
    indice = numbers.indexOf(j);
    if (indice != -1) {
      contador++;
      numbers.slice(indice, 1);
    } else {
      objetoNumeros.push({ [j]: contador });
      contador = 0;
      j++;
    }
  }
  console.log(objetoNumeros);
};

module.exports = {
  auth,
  fakerProducts,
  isValidPassword,
  createHash,
  generarNumeros,
  verificar,
};
