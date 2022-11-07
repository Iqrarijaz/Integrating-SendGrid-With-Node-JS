const sendGrid = require("@sendgrid/mail");
const { env } = require("process");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
const sendTo = process.env.SEND_TO;
const sendFrom = process.env.SEND_FROM;
console.log(API_KEY);
sendGrid.setApiKey(API_KEY);
const message = {
  to: sendTo,
  from: sendFrom,
  subject: "Hello world",
  text: "Hello plain world!",
  html: "<p>Hello HTML world!</p>",
  templateId: process.env.TEMPLATE_ID,
  dynamic_template_data: {
    subject: "Testing Templates & Stuff",
    name: "Customer",
    city: "<b>your City<b>",
  },
};
sendGrid
  .send(message)
  .then((res) => {
    console.log("email sent successfully...");
  })
  .catch((error) => {
    console.log("email sent error:" + error);
  });
