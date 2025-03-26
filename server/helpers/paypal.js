const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
  client_secret: "ABCDEFGHIJKLMNOPQRSTUVWX1234567890",
});

module.exports = paypal;
