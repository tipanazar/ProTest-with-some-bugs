import axios from 'axios';

const getTest = async (type) => {
  const data = await axios.get(`/qa-test/${type}`);  
  return data;
};

const getResult = async ({answers, type}) => {
  const { data: result } = await axios.post(`/qa-test/${type}-results`, {answers});  
  return result;
};

const qaApi = {
  getTest, 
  getResult,  
};

export default qaApi;
