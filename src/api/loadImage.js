import instance from "./instance/instance";

const loadImage = async (page, size) => {
  const response = instance.get(`/api/popular?page=${page}&size=${size}`);
  return response;
};

export { loadImage };
