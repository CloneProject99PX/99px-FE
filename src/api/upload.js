import instance from './instance/instance';

const uploadImage = async (formData) => {
  const response = instance.post('/api/manage/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export { uploadImage };
