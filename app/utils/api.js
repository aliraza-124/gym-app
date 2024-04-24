import axios from 'axios';


const BASE_URL = 'https://api.dev.inzer.com.au';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, {
      email: credentials.email,
      password: credentials.password,
      from: 'user',
    });
    return response.data;
  } 
  catch (error) {
    // throw error;
  }
};

export const signUp = async (values, branchId) => {
    // try {
      const response = await axios.post(
        // 'https://api.dev.inzer.com.au',
        'https://api.dev.inzer.com.au/user/signup',
        {
          name: values.name,
          email: values.email,
          password: values.password,
          from: 'user',
          role: 'user',
          branchId: branchId,
        }
      );
      return response.data;
    // } catch (error) {
      // throw error; // Rethrow the error to handle it in the component
    // }
  };
  
export const updateProfile = async (values, token) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/user`,
        {
          name: values.name,
          email: values.email,
          dateOfBirth: values.dob,
          weight: values.weight,
          gender: values.gender,
          phoneNumber: values.phoneNo,
          address: values.address,
          emergencyContactName: values.emergencyContactName,
          emergencyContactNumber: values.emergencyContactNo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

export const getProfile = async (token) => {
  try {
    const response = await axios.get("https://api.dev.inzer.com.au/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};