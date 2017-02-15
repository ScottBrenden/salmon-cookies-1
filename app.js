'use strict';

// <######## START NEW TUESDAY CODE ########>

function CookieStore(name, minCustomers, maxCustomers, avgCookies, hourlyCount, customers, sales, totalSales) {
  this.name = name; // The name of the cookie store.
  this.minCustomers = minCustomers; // "this" is dynamic and "this" context will change over and over again.
  this.maxCustomers = maxCustomers; // "this" knows what it is depending on the context.
  this.avgCookies = avgCookies; // "this" gets replaced with "pikePlace" below.
  this.hourlyCount = []; // Default empty array. Here, this would be empty every time.
  this.range = maxCustomers - minCustomers;
  this.customers = customers;
  this.sales = sales;
  this.totalSales = 0;
  this.dailySales = [];
}

// Adam's example works for one table.
// CookieStore.prototype.getAvgCookieCount = function(){
//   console.log('got avg cookie count.');
//   return Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies);
//   this.avgCookies;
// };

// 1. Randomize customer data: customers.
// 2. Determine cookies per hour: cookies.
// 3. Loop through each hour for each store

// Hours of operation
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Goal 1: array of all sales each hour during one day.
CookieStore.prototype.salesPerDay = function() {
  for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    this.dailySales.push(Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies));
  }
};

// Goal 2: function that returns the total cookies for the store.
CookieStore.prototype.totalSalesPerDay = function() {
  // this.totalSales += sales;
  this.totalSales = 0;
  for (var i = 0; i < this.dailySales.length; i++) {
    this.totalSales += this.dailySales[i];
  }
};

// CookieStore.prototype.getAvgCookieCount = function() {
//   for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
//     console.log('got avg cookie count.');
//     var sales = Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies);
//     this.avgCookies;
//     // this.customers = getAvgCookieCount(this.maxCustomers, this.minCustomers);
//     // this.sales = getAvgCookieCount(customers, this.avgCookies);
//     this.totalSales += sales;
//     // console.log(hoursOpen[iHours]);
//     // createElement('li', 'class', 'hourly-sales', hoursOpen[iHours] + ': ' + sales + ' cookies.', elements[iStores]);
//     // this.hourlySales.push(sales);
//   }
//   console.log(this.totalSales);
// };

/*
// // Function to populate array Data.
// function cookieSales(maxCustomers, minCustomers, avgCookies) {
//   var hourlySales = [];
//   for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
//     var customers = customersThisHour(maxCustomers, minCustomers);
//     ...
//   }
// }
*/

// Order is ('name', minCustomers, maxCustomers, avgCookies, hourlyCount);
var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3);
firstAndPike.salesPerDay();
firstAndPike.totalSalesPerDay();
console.log(firstAndPike.totalSales);
var seaTacAirport = new CookieStore('Seatac Airport', 3, 24, 1.2);
// firstAndPike.getAvgCookieCount();
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 2.3);
// firstAndPike.getAvgCookieCount();
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
// firstAndPike.getAvgCookieCount();
var alki = new CookieStore('Alki', 2, 16, 4.6);
// firstAndPike.getAvgCookieCount();

var stores = [firstAndPike, seattleCenter, capitolHill, alki];

// Goal 3:
// Start with this: For loop ... this.dailySales = []; ... turned into <td> element.
// Create heading and footer seperately. Each store needs <thead><th><td><td> <th><td><td> <th><td><td><tfoot>

// --> Send to DOM / HTML.

// Populate into a simple table. Simple for loop: populate two stores into table.
var tableEl = document.createElement('table'); // tableEl = <table></table> Step 1. Create entire table.

// All values across each hour of each store with a total.
// firstAndPike.salesPerDay();
// firstAndPike.totalSalesPerDay();

/*
for (var i = 0; i < hoursOpen.length; i++) {
  // stores[i] // Start: get reference to current store in relation to this loop.
  var currentStore = this.dailySales[i]; // Access each store to get it's data.

  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl); // Get row element onto the table. Row is parent for each store.

  var nameEl = document.createElement('th'); // Name of the current store.
  nameEl.textContent = currentStore.name; // A new node element. Defining the text in the <th> tag.
  rowEl.appendChild(nameEl); // nameEl is the child.

  // Here is a TD element >> Loop through.
  var minCustEl = document.createElement('td'); // Current store data.
  minCustEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustEl);

  var maxCustEl = document.createElement('td'); // Current store data.
  maxCustEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustEl);

  var avgCookiesEl = document.createElement('td'); // 1. Create the element.
  avgCookiesEl.textContent = currentStore.avgCookies; // 2. Set elements, assign.
  rowEl.appendChild(avgCookiesEl); // 3. Append the child.
  */

// One value for each store.

for (var i = 0; i < stores.length; i++) {
  // stores[i] // Start: get reference to current store in relation to this loop.
  var currentStore = stores[i]; // Access each store to get it's data.

  var rowEl = document.createElement('tr'); // If it was 'img' it would be a self closing tag and would work.
  tableEl.appendChild(rowEl); // Get row element onto the table. Row is parent for each store.

  var nameEl = document.createElement('th'); // Name of the current store.
  nameEl.textContent = currentStore.name; // A new node element. Defining the text in the <th> tag.
  rowEl.appendChild(nameEl); // nameEl is the child.

  var minCustEl = document.createElement('td'); // Current store data.
  minCustEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustEl);

  var maxCustEl = document.createElement('td'); // Current store data.
  maxCustEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustEl);

  var avgCookiesEl = document.createElement('td'); // 1. Create the element.
  avgCookiesEl.textContent = currentStore.avgCookies; // 2. Set elements, assign.
  rowEl.appendChild(avgCookiesEl); // 3. Append the child.

}

document.body.appendChild(tableEl); // Step 3.
// Create a <div>
var tableDivEl = document.getElementById('table-div');
tableDivEl.appendChild(tableEl);

// -- > Duplicated Expendible Looping Example
/*
//var sectionEl = document.getElementById('Hello');
//var divEl = document.getElementsByClassName('other'); // Could dynamicallky build this array var domEl = ['pike-store', ...];
var pikeEl = document.getElementById('pike-store'); // Method. Referenced from the DOM (not a copy).
// Define each store ...
var elements = [pikeEl, ...]; // HTML node. ul/li.

//simple element creation. A function declaration (not expression which would be tied to a variable.)
function createElement(tagType, tagIdentifier, tagIdentifierName, elementContent, node) {
  var element = document.createElement(tagType); // Method create element. element is HTML node. Creating a new one.
  element.setAttribute(tagIdentifier, tagIdentifierName); // myCustomId. Id attribute in HTML (pike-store), can set any attribute.
  element.textContent = elementContent; // Object has a textContent property. Assign parameter. 'Hello User' assigned to node.
  // See line 26 below. Also above, all properties are functions attached to an object.
  console.log(element); // < Element node. Empty open and closed <p> tag here.
  //give child to the DOM. Everything we do goes straight to the DOM. Adding nodes happens to the DOM.
  node.appendChild(element); // property of an element, not a method because not a function(). Element will be the new child.
  // If we pass in the wrong argument (string when looking for sectionEl node), we will get a crash, see line 24.
}

// Debug with elements tab in browser. Could add 'class' in list below or any attribute.
// createElement here is a test, but will be done later in a loop.
// createElement('p', 'id', 'addedContent', 'Hello User', sectionEl); // We would call create element. Tag type parameter.
// Handing in the actual object sectionEl.
//<p> id = "myCustomId">Hello User</p> // This is the result of the createElement above.
//createElement('h1', 'class', 'heading-one', 'It lives!', divEl[0]);

// Customers per hour
function customersThisHour(MaxCustomers, minCustomers) {
  var range = MaxCustomers - minCustomers;
  return Math.floor(Math.random() * range) + minCustomers; // round down:((0-1) * range), then + at least that number of people.
  // Could create a variable with these arguments. All functions implicitly return, but if not specified it's nothing.
  console.log(); // Will never run because of return above on line 32.
}
// var customers = customersThisHour(20, 9); // Example.
// Don't put returns in for loops because it will only run once. Common to return result after for loop.

// Cookies sold this hour
// Because of hoisting if this was defined as an function expression/anonymous function equal to a variable.
// It would only be available from this point on. The variable would be available, but not the function value.
// Instead this is defined as a function declaration, declaring a function.
function cookiesSoldThisHour(customers, avgCookies) {
  return Math.floor(customers * avgCookies);
}

// // Function to populate array Data.
// function cookieSales(maxCustomers, minCustomers, avgCookies) {
//   var hourlySales = [];
//   for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
//     var customers = customersThisHour(maxCustomers, minCustomers);
//     ...
//   }
// }

// Hours of operation
var hoursOpen = ['6am,' ... '8pm'];

// Objects are made up of key-value pairs. Also creating minCustomers as a property.
var pikeStore = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  totalSales: 0,
  hourlySales: [],
  cookieSales: function() {
    for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    var customers = customersThisHour(this.maxCustomers, this.minCustomers);
    var sales = cookiesSoldThisHour(customers, this.avgCookies);
    this.totalSales += sales;
    console.log(this.totalSales);
    // console.log(hoursOpen[iHours]);
    createElement('li', 'class', 'hourly-sales', hoursOpen[iHours] + ': ' + sales + ' cookies.', elements[iStores]);
    this.hourlySales.push(sales);
    }
  }
};

// Stores output
var stores = [pikeStore, airportStore, centerStore, hillStore, alkiStore];
for (var iStores = 0; ) {
  stores[iStores].cookieSales();
  createElement('li,' 'class', 'store-total', ...)

}
*/
// -- > End Duplicated Expendible Looping Example

// <######## END NEW TUESDAY CODE ########>

// <######## START WORKING ADAM LECTURE ########>
/*
// Constructor: just a function which is just an object.
// When we go to create a new instance we will need each parameter.
function CookieStore(name, minCustomers, maxCustomers, avgCookies, hourlyCount) {
  // Refers to the one coming in from the argument for this parameter.
  this.name = name; // The name of the cookie store.
  // this.name = name || 'Unknown'; //
  this.minCustomers = minCustomers; // "this" is dynamic and "this" context will change over and over again.
  this.maxCustomers = maxCustomers; // "this" knows what it is depending on the context.
  this.avgCookies = avgCookies; // "this" gets replaced with "pikePlace" below.
  // this.hourlyCount = hourlyCount;
  // this.hourlyCount = hourlyCount || []; If not defined, will default to the falsy. Also if array not defined use empty.
  this.hourlyCount = []; // Default empty array. Here, this would be empty every time.
  this.range = maxCustomers - minCustomers; // Could use the parameters or the member properties with ths.maxCustomers...

  // Example: pikePlace = minCustomers; // when var pikePlace creates new instance.
  // Example: otherStore = minCustomers; // when var otherStore creates new instance.
  // this.someFunc = function() {} // We won't be doing this because it will break once we start doing inheritance.
}

// Correct way. Anonymous function. Will allow you to inherit later.
// Adding to the prototype this method. Works same way as contructor, we have access to all the values.
// "This" gets it's context from whatever is flowing in.
CookieStore.prototype.getAvgCookieCount = function(){
  console.log('got avg cookie count.');
  //return Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers + 1) + this.minCustomers) * this.avgCookies);
  return Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies);
  this.avgCookies;
};

// var hourlyCookies = [50, 100, 45, 23, 7]; // This could be empty array. As it is, will result in all array values.
// var hourlyCookies = [];

// firstAndPike.getAvgCookieCount(); // Calling the function.
// otherStore.getAvgCookieCount(); // Associated with the object.
// anotherStore.getAvgCookieCount();

// An instance of a cookie store. firstAndPike is an instance. ToyotaYaris (all), adamsToyotaYaris (instance).
var firstAndPike = new CookieStore('Pike Place', 23, 65, 6.3);
firstAndPike.getAvgCookieCount();
// Cookie store has parameters, numbers, order is important.
var otherStore = new CookieStore('Other Store', 100, 200, 10.0); // Important for inheritance later.

// Might even have a for loop that creates all these stores (above).
// firstAndPike.avgCookies // (will give value of 6.3)

var anotherStore = new CookieStore('Downtown', 50, 500, 1600.0);

var stores = [firstAndPike, otherStore, anotherStore]; // Each instance now knows everything (properties and methods).

// console.log(firstAndPike.getAvgCookieCount());
// firstAndPike.getAvgCookieCount()
// otherStore.getAvgCookieCount()
// console.log(firstAndPike.hourlyCount([0]));

  // firstAndPike
  // {
  //   minCustomers: 23,
  //   maxCustomers: 65,
  //   avgCookies: 6.3
  // }

  // otherStore
  // {
  //   minCustomers: 100,
  //   maxCustomers: 200,
  //   avgCookies: 10.0
  // }

// Populate into a simple table. Simple for loop: populate two stores into table.
var tableEl = document.createElement('table'); // tableEl = <table></table> Step 1. Create entire table.

for (var i = 0; i < stores.length; i++) {
  // stores[i] // Start: get reference to current store in relation to this loop.
  var currentStore = stores[i]; // Access each store to get it's data.
  // Think of one iteration of the loop! Pike place in this case. Helps simplify.

  var rowEl = document.createElement('tr'); // If it was 'img' it would be a self closing tag and would work.
  tableEl.appendChild(rowEl); // Get row element onto the table. Row is parent for each store.

  var nameEl = document.createElement('th'); // Name of the current store.
  nameEl.textContent = currentStore.name; // A new node element. Defining the text in the <th> tag.
  rowEl.appendChild(nameEl); // nameEl is the child.

  var minCustEl = document.createElement('td'); // Current store data.
  minCustEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustEl);

  var maxCustEl = document.createElement('td'); // Current store data.
  maxCustEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustEl);

  var avgCookiesEl = document.createElement('td'); // 1. Create the element.
  avgCookiesEl.textContent = currentStore.avgCookies; // 2. Set elements, assign.
  rowEl.appendChild(avgCookiesEl); // 3. Append the child.

}

document.body.appendChild(tableEl); // Step 3.
// Create a <div>
var tableDivEl = document.getElementById('table-div');
tableDivEl.appendChild(tableEl);
*/
// Stick with one script per HTML page for now.

// <######## END WORKING ADAM LECTURE ########>

// <######## START TUESDAY CODE RE-VIEW ########>
/*
//var sectionEl = document.getElementById('Hello');
//var divEl = document.getElementsByClassName('other'); // Could dynamicallky build this array var domEl = ['pike-store', ...];
var pikeEl = document.getElementById('pike-store'); // Method. Referenced from the DOM (not a copy).
// Define each store ...
var elements = [pikeEl, ...]; // HTML node. ul/li.

//simple element creation. A function declaration (not expression which would be tied to a variable.)
function createElement(tagType, tagIdentifier, tagIdentifierName, elementContent, node) {
  var element = document.createElement(tagType); // Method create element. element is HTML node. Creating a new one.
  element.setAttribute(tagIdentifier, tagIdentifierName); // myCustomId. Id attribute in HTML (pike-store), can set any attribute.
  element.textContent = elementContent; // Object has a textContent property. Assign parameter. 'Hello User' assigned to node.
  // See line 26 below. Also above, all properties are functions attached to an object.
  console.log(element); // < Element node. Empty open and closed <p> tag here.
  //give child to the DOM. Everything we do goes straight to the DOM. Adding nodes happens to the DOM.
  node.appendChild(element); // property of an element, not a method because not a function(). Element will be the new child.
  // If we pass in the wrong argument (string when looking for sectionEl node), we will get a crash, see line 24.
}

// Debug with elements tab in browser. Could add 'class' in list below or any attribute.
// createElement here is a test, but will be done later in a loop.
// createElement('p', 'id', 'addedContent', 'Hello User', sectionEl); // We would call create element. Tag type parameter.
// Handing in the actual object sectionEl.
//<p> id = "myCustomId">Hello User</p> // This is the result of the createElement above.
//createElement('h1', 'class', 'heading-one', 'It lives!', divEl[0]);

// Customers per hour
function customersThisHour(MaxCustomers, minCustomers) {
  var range = MaxCustomers - minCustomers;
  return Math.floor(Math.random() * range) + minCustomers; // round down:((0-1) * range), then + at least that number of people.
  // Could create a variable with these arguments. All functions implicitly return, but if not specified it's nothing.
  console.log(); // Will never run because of return above on line 32.
}
// var customers = customersThisHour(20, 9); // Example.
// Don't put returns in for loops because it will only run once. Common to return result after for loop.

// Cookies sold this hour
// Because of hoisting if this was defined as an function expression/anonymous function equal to a variable.
// It would only be available from this point on. The variable would be available, but not the function value.
// Instead this is defined as a function declaration, declaring a function.
function cookiesSoldThisHour(customers, avgCookies) {
  return Math.floor(customers * avgCookies);
}

// // Function to populate array Data.
// function cookieSales(maxCustomers, minCustomers, avgCookies) {
//   var hourlySales = [];
//   for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
//     var customers = customersThisHour(maxCustomers, minCustomers);
//     ...
//   }
// }

// Hours of operation
var hoursOpen = ['6am,' ... '8pm'];

// Objects are made up of key-value pairs. Also creating minCustomers as a property.
var pikeStore = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  totalSales: 0,
  hourlySales: [],
  cookieSales: function() {
    for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    var customers = customersThisHour(this.maxCustomers, this.minCustomers);
    var sales = cookiesSoldThisHour(customers, this.avgCookies);
    this.totalSales += sales;
    console.log(this.totalSales);
    // console.log(hoursOpen[iHours]);
    createElement('li', 'class', 'hourly-sales', hoursOpen[iHours] + ': ' + sales + ' cookies.', elements[iStores]);
    this.hourlySales.push(sales);
    }
  }
};

// Stores output
var stores = [pikeStore, airportStore, centerStore, hillStore, alkiStore];
for (var iStores = 0; ) {
  stores[iStores].cookieSales();
  createElement('li,' 'class', 'store-total', ...)

}
*/
// <######## END TUESDAY CODE RE-VIEW ########>

// <######## START WORKING MONDAY CODE ########>
/*
var firstAndPike = {
  title: 'First and Pike',
  // name: 'First and Pike', // Used for working console.
  name: 'first-and-pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  totalHours: 15,
  salesPerHour: [],
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var seaTacAirport = {
  title: 'Seatac Airport',
  // name: 'Seatac Airport', // Used for working console.
  name: 'seatac-airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  totalHours: 15,
  salesPerHour: [],
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var seattleCenter = {
  title: 'Seattle Center',
  // name: 'Seattle Center', // Used for working console.
  name: 'seattle-center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 2.3,
  totalHours: 15,
  salesPerHour: [],
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var capitolHill = {
  title: 'Capitol Hill',
  // name: 'Capitol Hill', // Used for working console.
  name: 'capitol-hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  totalHours: 15,
  salesPerHour: [],
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var alki = {
  title: 'Alki',
  // name: 'Alki', // Used for working console.
  name: 'alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  totalHours: 15,
  salesPerHour: [],
  numberOfCustomers: 0, // Used to hold the random customers result.

  // MDN. Generate a random number between min and max customer count per store.
  // Parameters: minCust, maxCust
  randomCustomers: function() {
    // Math.ceil(this.minCust);
    // Math.floor(this.maxCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  // Total number of random customers over 15 hours.
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var eachHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var eachStore = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

// Use for working console.
// var eachHour = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var eachStoreTag = ['first-and-pike', 'seatac-airport', 'seattle-center', 'capitol-hill', 'alki'];

// Loop through all the stores and create list for each.
for (var j = 0; j < eachStore.length; j++) {
  var storeHours = document.createElement('ul');
  // Loop through all the hours.
  for (var i = 0; i < eachHour.length; i++) {
    // For each store, take all cookies sold, and store in empty array.
    eachStore[j].salesPerHour.push(parseInt(eachStore[j].randomCustomers() * eachStore[j].avgCookieSale));
    // Hold list items in a variable, use that variable to enter text.
    var elementBucket = document.createElement('li');
    elementBucket.textContent = eachHour[i] + ', ' + eachStore[j].title + ', ' + eachStore[j].salesPerHour[i];
    storeHours.appendChild(elementBucket);
  }
  // Step 3. Hand to DOM
  var allTheStores = document.getElementById(eachStore[j].name);
  allTheStores.appendChild(storeHours);
}

// Problems: was store name and tag used the same property. Need store totals from working console.
// Solutions: create a new property "title" and use .title as text on line 149.

*/
// <######## END WORKING MONDAY CODE ########>

// <######## START WORKING MONDAY CONSOLE TEST ########>
/*
// // Shows log of each store, all cookies, and total cookies.
// for (var j = 0; j < eachStore.length; j++) {
//   var totalCookiesStore = 0;
//   console.log(eachStore[j].name);
//   for (var i = 0; i < eachHour.length; i++) {
//     eachHour[i];
//     var totalCookieHour = eachStore[j].totalCookiesHour();
//     console.log('This is for the ' + eachStore[j].name + ' store at ' + eachHour[i] + ':00 - ' + totalCookieHour);
//     totalCookiesStore += totalCookieHour;
//     // Total cookies starts at 0 + first hour + second hour ...
//   }
//   console.log('Total cookies: ' + totalCookiesStore);
// }
*/
// <######## END WORKING MONDAY CONSOLE TEST ########>
