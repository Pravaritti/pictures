import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID c8ZMq-B6u5BC69s-1_Z6uxFFiMU0cv1-DafHi7MJ9FM",
  },
});
