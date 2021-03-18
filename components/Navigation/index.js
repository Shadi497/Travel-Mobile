//React Imports
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";

//Components
import Home from "../Home";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import Booking from "../Booking";
import Profile from "../Profile";
import UpdateProfile from "../UpdateProfile";
import { ProfileButton } from "../Button/ProfileButton";
import { SignInButton } from "../Button/SignInButton";
import ProfileBookingHistory from "../ProfileBookingHistory";
import FlightListOutbound from "../FlightListOutbound";
import FlightListPage from "../FlightListPage";
import Checkout from "../Checkout";
import { HomeButton } from "../Button/HomeButton";

export const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  const checkProfile = useSelector((state) => state.authReducer.profile);

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Sign In",
          headerShown: false,
        }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Sign Up",
          headerShown: false,
        }}
      />

      <Screen
        name="Booking"
        component={Booking}
        options={{
          title: "Book your flight",
          headerRight: () =>
            checkProfile ? <ProfileButton /> : <SignInButton />,
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My Profile",
        }}
      />

      <Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          title: "Update Profile",
        }}
      />
      <Screen
        name="BookingHistory"
        component={ProfileBookingHistory}
        options={{
          title: "Booking History",
        }}
      />
      <Screen
        name="FlightList"
        component={FlightListPage}
        options={{
          title: "Flights results",
        }}
      />
      <Screen
        name="FlightListOutbound"
        component={FlightListOutbound}
        options={{
          title: "Flights results",
        }}
      />
      <Screen
        name="Checkout"
        component={Checkout}
        options={{
          title: "Checkout",
          headerRight: () => <HomeButton />,
        }}
      />
    </Navigator>
  );
};
