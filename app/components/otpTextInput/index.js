// import React, { useRef } from 'react';
// import { View } from 'react-native';
// import { Button } from 'react-native-paper';

// const OTPTextInput = React.forwardRef((props, ref) => (
//   // Assuming OTPTextInput is a custom component that you haven't provided
//   <View {...props} ref={ref}>
//     {/* Render your OTP text input component here */}
//   </View>
// ));

// const OTPInput = () => {
//   const otpInputRef = useRef(null);

//   const clearText = () => {
//     otpInputRef.current.clear();
//   };

//   const setText = () => {
//     otpInputRef.current.setValue('1234');
//   };

//   return (
//     <View>
//       <Button mode="contained" title="Clear" onPress={() => console.log("OTP Text")} />
//       <OTPTextInput ref={otpInputRef} />
//       <OTPTextInput ref={e => (otpInput = e)} />
//     </View>
//   );
// };

// export default OTPInput;
