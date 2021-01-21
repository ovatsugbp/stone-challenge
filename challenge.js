//example lists

const productList = [
    { product: "soap", price: 10, quantity: 2 },
    { product: "bottle", price: 30, quantity: 2 },
    { product: "cup", price: 20, quantity: 22 },
    { product: "popsicle", price: 10, quantity: 26 },
    { product: "candy", price: 190, quantity: 1 },
    { product: "water", price: 190, quantity: 1 },
];

const emailList = ["kyle@gmail.com", "sam@gmail.com", "ben@gmail.com"];

function calc(list, email) {
    //checking empty lists
    if (list.length <= 0) return "Please enter a valid product list";
    if (email.length <= 0) return "Please enter a valid email list";

    //creating new Object
    const result = {};

    //setting values

    const totalCost = list
        .map((el) => el.price * el.quantity)
        .reduce((acc, cc) => acc + cc);

    const valuePerPeople = Math.floor(totalCost / email.length);

    let rest = totalCost % email.length;

    //checking conditions

    if (valuePerPeople === 0) {
        email.forEach(
            (item) => (result[item] = (totalCost / email.length).toFixed(2))
        );
    } else {
        email.forEach((item) => {
            rest > 0
                ? (result[item] = valuePerPeople + 1)
                : (result[item] = valuePerPeople);

            rest--;
        });
    }
    return result;
}

//list creators

const generatingEmailList = (num) => {
    //check if the set number of items are valid
    if (num < 0) {
        console.error("Please enter a valid number");
        return [];
    }

    //setting variables
    let count = 1;
    let emailList = [];

    //looping to generate list
    while (count <= num) {
        emailList.push(`example${count}@example.com`);
        count++;
    }

    return emailList;
};

const generatingProductList = (items, price, quantity) => {
    //check if valid params
    if (items <= 0) {
        console.error("Please enter a valid number of items");
        return [];
    }
    if (price <= 0) {
        console.error("Please enter a valid price");
        return [];
    }
    if (quantity <= 0) {
        console.error("Please enter a valid quantity");
        return [];
    }

    //setting variables

    let count = 1;
    let products = [];

    //looping to generate list

    while (count <= items) {
        const randomPrice = Math.floor(Math.random() * (price - 1) + 1);
        const randomQuant = Math.floor(Math.random() * (quantity - 1) + 1);
        products.push({
            product: `product${count}`,
            price: randomPrice,
            quantity: randomQuant,
        });
        count++;
    }
    return products;
};

// testing

// console.log(calc(productList, generatingEmailList(-10)));
// console.log(generatingEmailList(-10));

const arg1 = generatingProductList(3, 100, 9);

const arg2 = generatingEmailList(1);

console.log(calc(arg1, emailList));
