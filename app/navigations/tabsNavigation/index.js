import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../../screens/profile";
import HomeScreen from "../../screens/home";
import Welcome from "../../screens/welcome";
import { Icon, useTheme } from "react-native-paper";
import AppHeader from "../../components/header";
import Workout from "../../screens/workout";
import BookPersonalTrainer from "../../screens/bookTrainer";
import History from "../../screens/history";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();


export default function TabsNavigator({navigation}) {
  const theme = useTheme();
  return (
    <Tab.Navigator
      
      initialRouteName={"profile"}
      barStyle={{backgroundColor:'tomato'}}
      screenOptions={{
        
        headerStyle: {
          // backgroundColor: '#F56E13',
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "#fff",

        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          position: "absolute",
          backgroundColor: "#000",

          // padding: 20,
        },
        // tabBarLabelPosition:'beside-icon',
        tabBarLabelStyle: { display: "none" },
        // tabBarLabelStyle: { color:'#000' },

        header: () => <AppHeader navigation={navigation}/>,
        // headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="workout"
        component={Workout}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source="dumbbell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="bookPT"
        component={BookPersonalTrainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source="account-group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source="history" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
