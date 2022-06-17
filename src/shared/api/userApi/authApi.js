import axios from 'axios';

axios.defaults.baseURL = 'https://protest-backend.goit.global';

const addAccessToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const registerUser = async userData => {
  const { data: result } = await axios.post('/auth/register', userData);
  return result;
};

const loginUser = async userData => {
  const { data: result } = await axios.post('/auth/login', userData);
  addAccessToken(result.accessToken);
  return result;
};

const logoutUser = async () => {
  const  data = await axios.post('/auth/logout');
  return data;
};

// Google auth??

const getCurrentUser = async accToken => {
  addAccessToken(accToken);
  const { data: result } = await axios.get('/user');
  return result;
};

const authApi = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default authApi;
