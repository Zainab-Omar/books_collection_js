console.log("hello")
const BACKEND_URL = 'localhost:3000';
fetch("http://localhost:3000/api/v1/users")
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));