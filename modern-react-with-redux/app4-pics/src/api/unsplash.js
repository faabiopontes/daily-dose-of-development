import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID a89b149c83299372d4e87e31219ad561fef12ebd12f07e7a1b3660910e9cfa1f"
  }
});
