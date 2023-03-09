import instance from './instance/instance';

const getInfo = async (id) => {
  const response = instance.get(`/api/photo/${id}`);
  return response;
};

export { getInfo };
