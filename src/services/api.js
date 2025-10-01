import axios from "axios";

const Api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api" 
      : "https://backend-portofolio-eight.vercel.app/api",
});

export default Api;
