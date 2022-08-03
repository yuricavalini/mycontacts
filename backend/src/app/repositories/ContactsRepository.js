const { v4: uuidv4 } = require('uuid');

let contacts = [
  {
    id: uuidv4(),
    name: 'Yuri',
    email: 'yuri@mail.com',
    phone: '12312312312',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'John Doe',
    email: 'jhondoe@mail.com',
    phone: '32132132132',
    category_id: uuidv4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

// Singleton Pattern
module.exports = new ContactsRepository();
