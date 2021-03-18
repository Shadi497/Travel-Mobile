//React imports
import React, { useState } from "react";
import { Text, ToastAndroid, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

//Actions imports
import { signup } from "../../store/actions/authActions";

//Styles
import { Signup, AuthTextInput, ButtonStyle, Errtext } from "./styles";

//Verification
import { Formik } from "formik";
import * as yup from "yup";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: 0,
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const OnSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user));
    navigation.replace("Home");
    ToastAndroid.show(`Welcome ${user.username} 👋`, ToastAndroid.SHORT);
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
            phoneNumber: "",
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
                  <Errtext>{errors.password}</Errtext>
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
                  <Errtext>{errors.email}</Errtext>
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
                  <Errtext>{errors.firstName}</Errtext>
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
                  <Errtext>{errors.lastName}</Errtext>
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
                  <Errtext>{errors.phoneNumber}</Errtext>
                )}
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
                Have an account?
                <Text style={{ fontWeight: "bold" }}> Sign In!</Text>
              </Text>
            </View>
          )}
        </Formik>
      </Signup>
    </ScrollView>
  );
}
