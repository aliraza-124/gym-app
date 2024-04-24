import * as Yup from "yup";
export const validationSchemaRegisteration = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])/,
        "Password must contain at least one special character"
      )
      .matches(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter"
      ),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });


  export const validationSchemaProfile = Yup.object().shape({
    //   name: Yup.string().required("Name is required"),
    //   email: Yup.string().email("Invalid email").required("Email is required"),
    dob: Yup.string().required("Date of Birth is required"),
    weight: Yup.number()
      .required("Weight is required")
      .min(1, "Weight must be at least 1"),
    gender: Yup.string().required("Gender is required"),
    //   password: Yup.string()
    //     .required("Password is required")
    //     .min(6, "Password must be at least 6 characters"),
    //   confirmPassword: Yup.string()
    //     .oneOf([Yup.ref("password"), null], "Passwords must match")
    //     .required("Confirm Password is required"),
    //   phoneNo: Yup.string().required("Phone No is required"),
    //   address: Yup.string().required("Address is required"),
    //   emergencyContactName: Yup.string().required(
    //     "Emergency Contact Name is required"
    //   ),
    //   emergencyContactNo: Yup.string().required("Emergency Contact No is required"),
  });

  export const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });