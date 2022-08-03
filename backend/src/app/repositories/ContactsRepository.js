// const { uuid } = require('uuid');
const { v4: uuidv4 } = require('uuid');

const contacts = [
  {
    id: uuidv4(),
    name: 'Yuri',
    email: 'yuri@mail.com',
    phone: '12312312312',
    category_id: uuidv4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

// Singleton Pattern
module.exports = new ContactsRepository();
