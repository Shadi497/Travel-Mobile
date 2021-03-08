import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// import Home from "../Home";
import SignIn from "../Authentication/SignIn";
// import SignUp from "../Authentication/SignUp";

export const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      {/* <Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Sign In",
          headerShown: false,
        }}
      />

      {/* <Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Sign Up",
          headerShown: false,
        }}
      /> */}
    </Navigator>
  );
};
