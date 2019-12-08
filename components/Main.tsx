import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Button } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Feed = () => {
  return <Text>Feed</Text>;
};
const Article = () => {
  return <Text>Settings</Text>;
};

const Profile = ({ navigation, route }) => {
  return (
    <Drawer.Navigator drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 0 },
        inactiveBackgroundColor: 'red'
      }}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
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

const Main = ({navigation}) => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerTintColor: "red",
          }}
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
