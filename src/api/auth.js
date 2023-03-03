import axios from "axios";

const temp = async () => {
  const response = axios.get("/");
  return response;
};

export { temp };
