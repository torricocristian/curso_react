import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://tiendita.wacpr.net/wp-json/app/v1",
  auth: {
    username: 'dev',
    password: 'c0nt4ct1c4_2022'
  }
});

