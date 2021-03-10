import React, { useState } from "react";
import { Text, ToastAndroid, View } from "react-native";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
import {
  SignButtonStyle,
  Signup,
  AuthTextInput,
  ButtonStyle,
  Errtext,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";
import { RadioButton } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";

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

  const OnSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user));
    navigation.replace("Home");
    ToastAndroid.show(`Welcome ${user.username}`, ToastAndroid.SHORT);
  };

  return (
    <ScrollView>
      <Signup>
        <Text style={{ marginBottom: 30, fontWeight: "bold", fontSize: 25 }}>
          Sign Up
        </Text>

        <Formik
          initialValues={{
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            // dateOfBirth: "",
            // gender: checked,
            phoneNumber: 0,
          }}
          onSubmit={(values) => setUser(values)}
          validationSchema={yup.object().shape({
            username: yup.string().required("Please, provide your user name!"),
            password: yup
              .string()
              .min(8, "Password must be more than 8 chars.")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:"
              )
              .required("Password is required!"),
            email: yup.string().email().required("Please, provide your email!"),
            firstName: yup
              .string()
              .required("Please, provide your first name!"),
            lastName: yup.string().required("Please, provide your last name!"),
            phoneNumber: yup.string().required("Please, provide your number!"),
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View>
              <View style={{ marginBottom: 25 }}>
                <AuthTextInput
                  value={values.username}
                  onChangeText={handleChange("username")}
                  onBlur={() => setFieldTouched("username")}
                  placeholder="username"
                />
                {touched.username && errors.username && (
                  <Errtext>{errors.username}</Errtext>
                )}
              </View>
              <View style={{ marginBottom: 25 }}>
                <AuthTextInput
                  value={values.password}
                  onChangeText={handleChange("password")}
                  placeholder="Password"
                  onBlur={() => setFieldTouched("password")}
                  secureTextEntry={true}
                />
                {touched.password && errors.password && (
                  <Errtext style={{}}>{errors.password}</Errtext>
                )}
              </View>

              <View style={{ marginBottom: 25 }}>
                <AuthTextInput
                  value={values.email}
                  onChangeText={handleChange("email")}
                  placeholder="Email"
                  onBlur={() => setFieldTouched("email")}
                  keyboardType="email-address"
                />
                {touched.email && errors.email && (
                  <Errtext style={{}}>{errors.email}</Errtext>
                )}
              </View>

              <View style={{ marginBottom: 25 }}>
                <AuthTextInput
                  value={values.firstName}
                  onChangeText={handleChange("firstName")}
                  placeholder="First Name"
                  onBlur={() => setFieldTouched("firstName")}
                />
                {touched.firstName && errors.firstName && (
                  <Errtext style={{}}>{errors.firstName}</Errtext>
                )}
              </View>

              <View style={{ marginBottom: 25 }}>
                <AuthTextInput
                  value={values.lastName}
                  onChangeText={handleChange("lastName")}
                  placeholder="Last Name"
                  onBlur={() => setFieldTouched("lastName")}
                />
                {touched.lastName && errors.lastName && (
                  <Errtext style={{}}>{errors.lastName}</Errtext>
                )}
              </View>

              <View style={{ marginBottom: 25 }}>
                <AuthTextInput
                  value={values.phoneNumber}
                  onChangeText={handleChange("phoneNumber")}
                  placeholder="Phone Number"
                  onBlur={() => setFieldTouched("phoneNumber")}
                  keyboardType="phone-pad"
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <Errtext style={{}}>{errors.phoneNumber}</Errtext>
                )}
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 15,
                }}
              >
                {/* <View>
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
                      value={values.gender}
                      onChange={handleChange("gender")}
                      onBlur={() => setFieldTouched("gender")}
                      // value="male"
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
                      value={values.gender}
                      // value="female"
                      onChange={handleChange("gender")}
                      onBlur={() => setFieldTouched("gender")}
                      status={checked === "female" ? "checked" : "unchecked"}
                      onPress={() => setChecked("female")}
                    />
                    <Text>Female</Text>
                  </View>
                </View> */}
                {/* <View
                  style={{
                    marginLeft: 45,
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
                    onDateChange={(dateOfBirth) =>
                      setUser({ ...user, dateOfBirth })
                    }
                  />
                </View> */}
              </View>

              <ButtonStyle
                title="Submit"
                disabled={!isValid}
                onPress={
                  user.username && user.password ? OnSubmit : handleSubmit
                }
              />

              <Text
                style={{ marginTop: 15, marginBottom: 25 }}
                onPress={() => navigation.navigate("SignIn")}
              >
                Have an account?{" "}
                <Text style={{ fontWeight: "bold" }}> Sign In!</Text>
              </Text>
            </View>
          )}
        </Formik>
      </Signup>
    </ScrollView>
  );
}
