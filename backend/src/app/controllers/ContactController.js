class ContactController {
  index(request, response) {
    response.send('Sent from Contact Controller');
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

// Singleton
module.exports = new ContactController();
