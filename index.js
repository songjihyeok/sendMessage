const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const app = express();

const send_message = (phone) => {
  const user_phone_number = phone;
  const resultCode = 404;
  const date = Date.now().toString();
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000);
