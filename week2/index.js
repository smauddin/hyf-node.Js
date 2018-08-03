const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");

let petru = new Contact("Petru", 24);
let richerd = new Contact("Richerd", 35, 12312344);


console.log(petru);

petru.call();

let list = new ContactList("contacts.json");

list.add(petru);
list.add(new Contact("Anowar", 37, 28774447));
list.load();
list.save()

richerd.birthday();

console.log(list);