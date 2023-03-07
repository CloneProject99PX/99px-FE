import instance from "./instance/instance";

const signUp = async ({ email, password }) => {
  const response = instance.post("/api/auth/signup", { email, password });
  console.log(response);
  return response;
};

const logIn = async ({ email, password }) => {
  const response = instance.post("/api/login", { email, password });
  console.log(response);
  return response;
};

export { signUp, logIn };
