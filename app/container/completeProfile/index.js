import {} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {completeProfile} from '../../utils/api';
import CompleteProfileScreen from '../../screens/completeProfile';
import {useUserContext} from '../../contexts/AuthContext';

const CompleteProfile = ({navigation}) => {
  const [userData, setUserData] = useState();
  const {token} = useUserContext();

  console.log('Token from context: ======= ', token);

  const completeProfileQueryKey = 'completeProfileKey';

  const {
    data: userCompleteData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
    error: isDataError,
  } = useQuery(completeProfileQueryKey, () => completeProfile(token));

  useEffect(() => {
    // Check if userCompleteData exists and contains data
    if (userCompleteData && userCompleteData.data) {
      // Assuming setUserData is a state setter function
      setUserData(userCompleteData?.data);
      console.log('user Data ==', userCompleteData.data);
    }
  }, [token, userCompleteData?.data]);

  // const handleCompleteProfile = async () => {
  //   if (userCompleteData?.data) {
  //     const {name, email, dateOfBirth, weight, gender} = userCompleteData?.data;
  //     console.log(name, email, dateOfBirth || "DOB", weight || "Weight", gender || "Gender");
  //     // setUserData(userCompleteData?.data);

  //     // console.log(userData);
  //     // console.log("setState =============", userData);
  //   }
  // };

  // if (isUserDataLoading) {
  //   console.log('Loading.....');
  // }

  const handleCompleteProfile = () => {
    if (userCompleteData?.data) {
      const {name, email, dateOfBirth, weight, gender} = userCompleteData.data;
      console.log(
        name,
        email,
        dateOfBirth || 'DOB',
        weight || 'Weight',
        gender || 'Gender',
      );

      // setUserData(userCompleteData?.data);
    }
  };

  // useEffect(() => {
  //   handleCompleteProfile();
  // }, [userCompleteData?.data]);

  return (
    <>
      <CompleteProfileScreen navigation={navigation} userData={userData} />
    </>
  );
};

export default CompleteProfile;
