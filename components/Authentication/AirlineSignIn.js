import React, { useState } from "react";
import { Text, ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { airlinesignin, signin } from "../../store/actions/authActions";
import { SignButtonStyle, Signin, AuthTextInput, Errtext } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";

export default function AirlineSignIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const users = useSelector((state) => state.authReducer.user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(airlinesignin(user));
    navigation.replace("Home");
    if (users === "null") {
      ToastAndroid.show(
        `Welcome ${user.username}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    }
  };

  return (
    <ScrollView>
      <Signin>
        <Text style={{ marginBottom: 30, fontWeight: "bold", fontSize: 25 }}>
          Sign In
        </Text>
        <AuthTextInput
          onChangeText={(username) => setUser({ ...user, username })}
          value={user.username}
          placeholder="Username"
        />

        <AuthTextInput
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
          secureTextEntry={true}
          placeholder="Password"
        ></AuthTextInput>
        <SignButtonStyle onPress={handleSubmit}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </SignButtonStyle>
      </Signin>
    </ScrollView>
  );
}
