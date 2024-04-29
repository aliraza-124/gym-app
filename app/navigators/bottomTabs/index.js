import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CompleteProfile from '../../container/completeProfile';
import UserDashboardScreen from '../../screens/dashboard';
import WorkoutScreen from '../../screens/workout';
import BookPersonalTrainerScreen from '../../screens/bookPT';
import GymSocialsScreen from '../../screens/gymSocials';
import HistoryScreen from '../../screens/history';
import theme from '../../theme';
import {Icon} from 'react-native-paper';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CustomDropdownList from '../../components/dropdown/custom';

const Tab = createBottomTabNavigator();

const AppBottomTabs = ({navigation}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  //   const {user} = useUserContext();

  //   useEffect(() => {
  //     return () => {
  //       const isCompleteProfile = user;
  //       console.log(isCompleteProfile);
  //     };
  //   }, [user]);

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerStyle: {
          height: 60,
          //   padding: '20%',
          backgroundColor: theme.colors.primary,
        },

        headerTitle: '',

        headerLeft: () => (
          <>
            <Icon source="home" size={32} color={theme.colors.white} />
            {/* <Avatar.Image
              size={70}
              source={require('../../../assets/icons/logo.png')}
              style={{backgroundColor: 'transparent'}}
            /> */}
          </>
        ),

        headerRight: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon source="home" size={32} color={theme.colors.white} />

            {/* <CustomDropdownList /> */}
            {/* <Badge>3</Badge> */}
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Login')}>
              <Icon source="logout" size={28} color={theme.colors.white} />
            </TouchableWithoutFeedback>
          </View>
        ),

        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
        headerRightContainerStyle: {
          paddingRight: 20,
        },

        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },

        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.white,
      }}>
      {/* <Tab.Screen
        name="CompleteProfile"
        component={CompleteProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon source="account" color={color} size={32} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Home"
        component={UserDashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon source="home" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{
          tabBarLabel: 'workout',
          tabBarIcon: ({color}) => (
            <Icon source="dumbbell" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="BookPT"
        component={BookPersonalTrainerScreen}
        options={{
          tabBarLabel: 'Book a PT',
          tabBarIcon: ({color}) => (
            <Icon source="calendar" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="GymSocials"
        component={GymSocialsScreen}
        options={{
          tabBarLabel: 'Gym Socials',
          tabBarIcon: ({color}) => (
            <Icon source="account-group" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <Icon source="history" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
