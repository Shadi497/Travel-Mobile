import React, { useState } from "react";
import { Text, ToastAndroid } from "react-native";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";
import { SignButtonStyle, Signin, AuthTextInput, Errtext } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";

export default function SignIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(signin(user));
    navigation.replace("Home");
    ToastAndroid.show(`Welcome ${user.username}`, ToastAndroid.SHORT);
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
        <SignButtonStyle onPress={handleSubmit()}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </SignButtonStyle>
        <Text onPress={() => navigation.navigate("SignUp")}>
          Don't have an account?
          <Text style={{ fontWeight: "bold" }}> Sign Up!</Text>
        </Text>
      </Signin>
    </ScrollView>
  );
}
