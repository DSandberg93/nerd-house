const baseApiEndpoint = `http://${process.env.REACT_APP_API_HOST || 'localhost'}:${process.env.REACT_APP_API_PORT}/api`;
const defaultOptions = {
  headers: {
    Accept: 'application/json',
  },
  method: 'GET',
};

// eslint-disable-next-line no-undef
const callApi = (endpoint: string, options?: RequestInit) => {
  const callOptions = {
    ...defaultOptions,
    ...options,
  };
  return fetch(`${baseApiEndpoint}${endpoint}`, callOptions);
};

export const fetchHelloWorld = () => callApi('/hello-world');
