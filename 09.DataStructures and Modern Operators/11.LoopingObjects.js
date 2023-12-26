// Looping Objects: Object Keys, Values, Entries
/*
Object.keys() --> A function which returns an array of strings comprising of object keys. The array can be then looped over using for of loop.
*/
const openingHours = {
  thu: {
    open: 12,
    close: 12,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

//1. Looping over Object Property Names(Keys)
const properties = Object.keys(openingHours);
//console.log(properties); //Array of strings ['thu', 'fri', 'sat']

//Logging the object keys
for (const day of properties) {
  //console.log("dat", day);
}
//Pushing the each value in string
let openStr = `We are open ${properties.length} : `;

for (const day of properties) {
  openStr += `${day}, `;
}
//console.log(openStr);

// 2. Looping over Object (Values)
const values = Object.values(openingHours);
//console.log(values);

// 3. Looping over Object with (Entries)
const entries = Object.entries(openingHours);

for (const [key, value] of entries) {
  //Destructuring array
  //console.log(`On ${key} we open at ${value.open} and close at ${value.close}`);
}

for (const [day, { open, close }] of entries) {
  //Destructuring array alongwith the value as it is an object
  //console.log(`On ${day} we open at ${open} and close at ${close}`);
}

let discrepancy = {
  invoice_item_not_found_in_deliverynote: "",
  itemdescription:
    "TECHTOP IEC IE3 T3AR132M2-4 12,5 CV (9,2 KW) 1800 RPM 230/460 V 60 HZ B3 B5, sondas PTC, 9 hilos, caja derecha",
  deliverynotenumber: "22004853",
  invoicenumber: "1 / R / 2200631",
};

const data = Object.entries(discrepancy);
for (const [key, value] of data) {
}

console.log(discrepancy);
