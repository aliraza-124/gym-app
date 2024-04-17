import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
});

export const registrationValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short'),
  confirmPassword: Yup.string().required('Confirm password is required'),
});

export const profileValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  dob: Yup.string().required('DOB is required'),
  weight: Yup.string().required('Weight is required'),
  gender: Yup.string().required('Gender is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short'),
  confirmPassword: Yup.string().required('Confirm password is required'),

  phone: Yup.string().required('Phone no is required'),
  address: Yup.string().required('Address is required'),

  contactName: Yup.string().required('Contact name is required'),
  contactNumber: Yup.string().required('Contact no is required'),
});
