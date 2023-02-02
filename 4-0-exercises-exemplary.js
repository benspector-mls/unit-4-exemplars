// Update the starter code of this file 

const phoneMethods = {
  addContact(name, phoneNumber) { // ES6 syntax lets us remove the `: function` from this method
    this.contacts.push({ // Using `this` to reference the cellphone's own `contacts` property
      name, phoneNumber // ES6 syntax lets us create an object using variables as properties (keys and values)
    });
    return `${name} successfully added.`
  },
  numberOfContacts() {
    return this.contacts.length;
  },
  lookUp(name) {
    // find returns a value (or undefined) for the value that, when passed to the the provided callback, returns `true`
    let contact = this.contacts.find(contact => contact.name === name);
    if (!contact) {
      return "Contact not found."
    } else {
      return contact.phoneNumber;
    }
  },
  deleteContact(name) {
    // find returns an index (or -1) for the value that, when passed to the the provided callback, returns `true`
    const indexOfName = this.contacts.findIndex(contact => contact.name === name); 
    if (indexOfName === -1) {
      return 'Contact not found.'
    }
    this.contacts.splice(indexOfName, 1); // removes 1 value at the index `indexOfName`
    return `${name} successfully deleted.`
  },
  call(input) {
    // Get the contact object whose phoneNumber OR name matches the input
    let contact = this.contacts.find(contact => contact.phoneNumber === input || contact.name === input);
    if (!contact) {
      return "Contact not found."
    }
    return `Calling ${contact.name} at ${contact.phoneNumber}`;
  }
}

// Tests
const cellphone = Object.create(phoneMethods); // Create an object that inherits methods from phoneMethods
cellphone.phoneNumber = '7882966800';
cellphone.model = 'Pixel 5';
cellphone.contacts = [];

cellphone.contacts.push({
  name: 'Glin Thai',
  phoneNumber: '3479874100'
})
cellphone.addContact('Bob','9196239388');
cellphone.addContact('Bill','0987254321');
cellphone.addContact('Reuben Ogbonna', '9196219388')
cellphone.addContact('Jim Smith', '9876543210')
console.log(cellphone.numberOfContacts());

// Question 11
const makeCellPhone = function(phoneNumber, model) {
  // create a new object that inherits methods from phoneMethods
  let newPhone = Object.create(phoneMethods);
  // set the custom properties from the parameters and return
  newPhone.phoneNumber = phoneNumber;
  newPhone.model = model;
  newPhone.contacts = [];
  return newPhone;
}

module.exports = {
  cellphone,
  makeCellPhone,
};
