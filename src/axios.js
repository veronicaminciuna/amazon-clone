import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/project-3438d/us-central1/api",
});

export default instance;
