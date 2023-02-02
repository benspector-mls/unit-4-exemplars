// Update the starter code of this file 

const cellphone = {
  phoneNumber: '7882966800',
  model: 'Pixel 5',
  contacts: [],
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
};

// Tests
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
  // Return an object whose phoneNumber and model are provided along with methods
  return {
    phoneNumber,
    model,
    contacts: [],
    addContact(name, phoneNumber) {
      this.contacts.push({
        name, phoneNumber
      });
      return `${name} successfully added.`
    },
    numberOfContacts() {
      return this.contacts.length;
    },
    lookUp(name) {
      let contact = this.contacts.find(contact => contact.name === name);
      if (!contact) {
        return "Contact not found."
      } else {
        return contact.phoneNumber;
      }
    },
    deleteContact(name) {
      const indexOfName = this.contacts.findIndex(contact => contact.name === name);
      if (indexOfName === -1) {
        return 'Contact not found.'
      }
      this.contacts.splice(indexOfName, 1);
      return `${name} successfully deleted.`
    },
    call(input) {
      let name, phoneNumber;
      if (/^\d{10}$/.test(input)) {
        phoneNumber = input;
        let contact = this.contacts.find(contact => contact.phoneNumber === phoneNumber);
        if (!contact) {
          return "Contact not found. 2"
        }
        name = contact.name;
      } else {
        name = input;
        phoneNumber = this.lookUp(name);
        if (phoneNumber === "Contact not found.") {
          return "Contact not found.";
        }
      }
      return `Calling ${name} at ${phoneNumber}`;
    }
  };
}

module.exports = {
  cellphone,
  makeCellPhone,
};
