const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizers) {
        this._courses.appatizers = appatizers;
    },

    get mains() {
        return this._courses.mains;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },

    get desserts() {
        return this._courses.desserts;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal will start with ${appetizer.name}, followed by ${main.name}, and your dessert today will be ${dessert.name}. \n Total price will be ${totalPrice} dollars`;
    },

};

menu.addDishToCourse('appetizers', 'House Salad', 4);
menu.addDishToCourse('appetizers', 'Caesar Salad', 5);
menu.addDishToCourse('appetizers', 'Fish sticks', 6);
menu.addDishToCourse('appetizers', 'Salted oysters', 12);
menu.addDishToCourse('mains', 'Steak with potatoes', 8);
menu.addDishToCourse('mains', 'Turkey breast fillet with jam', 7);
menu.addDishToCourse('mains', 'Ravioli with lemongrass broth', 10);
menu.addDishToCourse('mains', 'Grilled chicken breast with everything', 9);
menu.addDishToCourse('desserts', 'Chocholate cake', 3);
menu.addDishToCourse('desserts', 'Raspberry pie', 4);
menu.addDishToCourse('desserts', 'Pancakes', 2);
menu.addDishToCourse('desserts', 'House cheese plate', 5);


let meal = menu.generateRandomMeal();
console.log(meal);
alert(meal);
document.getElementById('meal').innerHTML = meal;

//$('#new_meal').click(window.location.href = window.location.href);