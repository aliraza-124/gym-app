import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Avatar} from 'react-native-paper';

const data = [
  {label: 'Edit Profile', value: '1'},
  {label: 'Help', value: '2'},
  {label: 'Gym Rules', value: '3'},
  {label: 'Report an issue', value: '4'},
  {label: 'Logout', value: '5'},
];

const CustomDropdownList = () => {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <Avatar.Image
            size={50}
            source={require('../../../../assets/images/user-profile.png')}
          />
        )}
      />
    </View>
  );
};

export default CustomDropdownList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
  },
  dropdown: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    // paddingHorizontal: 8,
  },
//   icon: {
//     marginRight: 50,
//   },
//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
  //   iconStyle: {
  //     // width: 20,
  //     // height: 20,
  //   },
  //   inputSearchStyle: {
  //     height: 40,
  //     fontSize: 16,
  //   },
});

// import React, {useState} from 'react';
// import {StyleSheet, View, TouchableOpacity} from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';
// import {useNavigation} from '@react-navigation/native';
// import {Avatar, Text} from 'react-native-paper';

// const data = [
//   {
//     label: 'Edit Profile',
//     value: 'Login',
//     icon: 'folder',
//   },
//   {label: 'Help', value: 'Welcome', icon: 'folder'},
//   {
//     label: 'Gym Rules',
//     value: 'Login',
//     icon: 'folder',
//   },
//   {
//     label: 'Report an issue',
//     value: 'Welcome',
//     icon: 'folder',
//   },
//   {
//     label: 'Logout',
//     value: 'Login',
//     icon: 'folder',
//   },
// ];

// const CustomDropdownList = () => {
//   const navigation = useNavigation();
//   const [value, setValue] = useState(null);

//   const handleDropdownSelect = itemValue => {
//     setValue(itemValue);
//     // Navigate to the corresponding screen based on the selected value
//     navigation.navigate(
//       `${itemValue.charAt(0).toUpperCase() + itemValue.slice(1)}Screen`,
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Dropdown
//         data={data}
//         labelField="label"
//         valueField="value"
//         value={value}
//         onChange={item => handleDropdownSelect(item.value)}
//         renderLeftIcon={({icon}) => (
//           <Avatar.Icon size={24} icon={icon} />
          
//         )}

//         // renderLeftIcon={({icon}) => (
//         //   <Avatar.Image
//         //     size={46}
//         //     source={require('../../../../assets/images/user-profile.png')}
//         //     style={styles.icon}
//         //   />
//         // )}
//       />
//     </View>
//   );
// };

// export default CustomDropdownList;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
// });
