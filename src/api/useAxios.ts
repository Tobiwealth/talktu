import axios from "axios";
const BASE_URL = "https://talktu-api-426463824729.europe-west2.run.app";

export default axios.create({
  baseURL: BASE_URL,
});

