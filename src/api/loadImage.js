import instance from "./instance/instance";

const loadImage = async (page, size) => {
  const response = instance.get(`/api/popular?page=${page}&size=${size}`);
  console.log(response);
  return response;
};

export { loadImage };
