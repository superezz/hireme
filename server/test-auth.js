import axios from 'axios';

async function test() {
  try {
    const res = await axios.post('http://localhost:3001/api/users/login', {
      email: 'a@a.com',
      password: 'wrongpassword'
    });
    console.log("Logged in!", res.data);
  } catch (err) {
    console.error("Login failed:", err.response ? err.response.data : err.message);
  }
}

test();
