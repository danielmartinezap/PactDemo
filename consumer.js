const axios = require('axios');

const getUser = async (id) => {
  try {
    console.log(`Making request to get user with ID:  ${id}`);
    const response = await axios.get(`http://localhost:8081/user/${id}`, {
      headers: { 'Accept': 'application/json' }
    });
    console.log(`Received response:`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

module.exports = { getUser };