const fetchAPI = (date: Date) => {
  const result: string[] = ['17:00'];

  for (let i = 17; i < 23; i++) {
    Math.random() < 0.5 && result.push(i + ':30');
    Math.random() < 0.5 && result.push(i + 1 + ':00');
  }

  return new Promise((resolve) => resolve(result));
};

const isObjectEmpty = (objectName: object) => {
  return objectName && Object.keys(objectName).length === 0 && objectName.constructor === Object;
};

const submitAPI = (formData: object) => new Promise((resolve) => resolve(!isObjectEmpty(formData)));

export { fetchAPI, submitAPI };
