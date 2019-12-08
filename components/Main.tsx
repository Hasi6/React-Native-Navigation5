import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Button } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Profile = ({ navigation, route }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title={`${route.params}`}
        onPress={() => navigation.navigate("Profile", { name: "Hasi" })}
      ></Button>
    </View>
  );
};

const Settings = () => {
  return <Text>Settings</Text>;
};

const Home = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = "ios-home";
          }
          if (route.name === "Article") {
            iconName = "ios-settings";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Feed" component={Profile} />
      <Tab.Screen name="Article" component={Settings} />
    </Tab.Navigator>
  );
};

const Notifications = ({ navigation, route }) => {
  console.log(route.params);
  return (
    <View>
      <Text>Home</Text>
      <Button
        title={`${route.params.name}`}
        onPress={() => navigation.navigate("Home", { name: "Hasi" })}
      ></Button>
    </View>
  );
};

const Main = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Name", headerTitleAlign: "center", headerTintColor: 'red' }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default Main;
