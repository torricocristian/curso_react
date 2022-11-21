import axios from "axios";

export default axios.create({
  baseURL: "https://alode.store/wp-json/app/v1",
});

