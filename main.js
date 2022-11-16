
const pizzas = [
    {
        id: 1,
        nombre: "Margarita",
        precio: 1000,
        ingredientes: ["albahaca", "Pimienta", "tomate", "mozarella", "aceite de oliva"],
        porciones: 8,
    },

    {
        id: 2,
        nombre: "Bacon",
        precio: 1300,
        ingredientes: ["huevo", "bacon", "mozarella"],
        porciones: 8
    },

    {
        id: 3,
        nombre: "Italiana",
        precio: 1000,
        ingredientes: ["tomate", "Queso parmezano", "hongos", "salame"],
        porciones: 8
    },

    {
        id: 4,
        nombre: "Marinera",
        precio: 570,
        ingredientes: ["Muzarella", "tomate", "aceitunas", "anchoas"],
        porciones: 3
    },


    {
        id: 5,
        nombre: "Mexicana",
        precio: 600,
        ingredientes: ["Muzarella", "salame", "jalapeño", "albahaca"],
        porciones: 3
    },

    {
        id: 6,
        nombre: "Gringa",
        precio: 490,
        ingredientes: ["Cheddar", "Muzarella", "Bacon", "verdeo"],
        porciones: 3
    },

];
console.log("a");

const idPares = pizzas.filter((pizza) => {
    return pizza.id % 2 === 0;
})

idPares.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} tiene ID par `)
});

console.log("b")

const PizzasBaratas = (precio) => {
    return pizzas.some((pizzas) => {
        return pizzas.precio < precio;
    }) 
    ? console.log(`Si hay Pizzas menores a $${precio}`)
    : console.log(`No hay Pizzas menores a $${precio}`);
};

PizzasBaratas(600);

console.log("c")

const MenuDePizzas = pizzas.filter((pizzas) => {
    return pizzas.nombre && pizzas.precio
})

MenuDePizzas.forEach((pizzas) => {
    console.log(`La pizza ${pizzas.nombre} vale $${pizzas.precio}`);
});


console.log("d")


const IngredientesDePizzas = pizzas.filter((pizzas) => {
    return pizzas.nombre && pizzas.ingredientes
})

MenuDePizzas.forEach((pizzas) => {
    console.log(`La pizza ${pizzas.nombre} esta hecha de: ${pizzas.ingredientes}`);
});

