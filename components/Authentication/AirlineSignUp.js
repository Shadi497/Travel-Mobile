import React, { useState } from "react";
import { Text, ToastAndroid, View } from "react-native";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
import { SignButtonStyle, Signup, AuthTextInput } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";
import { RadioButton } from "react-native-paper";

export default function SignUp() {
  const [checked, setChecked] = useState("male");

  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: checked,
    phoneNumber: 0,
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user));
    navigation.replace("Home");
    ToastAndroid.show(`Welcome ${user.username}`, ToastAndroid.SHORT);
    console.log(user);
  };

  return (
    <ScrollView>
      <Signup>
        <Text style={{ marginBottom: 30, fontWeight: "bold", fontSize: 25 }}>
          Sign Up
        </Text>

        <AuthTextInput
          onChangeText={(username) => setUser({ ...user, username })}
          placeholder="Username"
        ></AuthTextInput>
        <AuthTextInput
          onChangeText={(password) => setUser({ ...user, password })}
          secureTextEntry={true}
          placeholder="Password"
        ></AuthTextInput>
        <AuthTextInput
          onChangeText={(email) => setUser({ ...user, email })}
          placeholder="Email"
          keyboardType="email-address"
        ></AuthTextInput>
        <AuthTextInput
          onChangeText={(firstName) => setUser({ ...user, firstName })}
          placeholder="First Name"
        ></AuthTextInput>
        <AuthTextInput
          onChangeText={(lastName) => setUser({ ...user, lastName })}
          placeholder="Last Name"
        ></AuthTextInput>
        <AuthTextInput
          onChangeText={(phoneNumber) => setUser({ ...user, phoneNumber })}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        ></AuthTextInput>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 9,
              }}
            >
              Gender
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RadioButton
                value="male"
                status={checked === "male" ? "checked" : "unchecked"}
                onPress={() => setChecked("male")}
              />
              <Text>Male</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RadioButton
                value="female"
                status={checked === "female" ? "checked" : "unchecked"}
                onPress={() => setChecked("female")}
              />
              <Text>Female</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 95,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Date of Birth</Text>
            <DatePicker
              style={{ marginTop: 11, marginBottom: 0, width: 135 }}
              date={user.dateOfBirth}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="1975-06-01"
              maxDate="2021-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  // marginLeft: 110,
                  width: 25,
                },
                dateInput: {
                  //   marginRight: 20,
                  marginLeft: 40,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(dateOfBirth) => setUser({ ...user, dateOfBirth })}
            />
          </View>
        </View>
        <SignButtonStyle onPress={handleSubmit}>
          <Text style={{ color: "white" }}>Sign Up</Text>
        </SignButtonStyle>
        <Text
          style={{ marginBottom: 25 }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Have an account? <Text style={{ fontWeight: "bold" }}> Sign In!</Text>
        </Text>
      </Signup>
    </ScrollView>
  );
}
