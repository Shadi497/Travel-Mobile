//React imports
import React, { useState } from "react";
import { Text, ToastAndroid, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

//Actions imports
import { signin } from "../../store/actions/authActions";

//Styles
import { ButtonStyle, Signin, AuthTextInput, Errtext } from "./styles";

//Verification
import { Formik } from "formik";
import * as yup from "yup";

export default function SignIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const users = useSelector((state) => state.authReducer.user);
  const OnSubmit = async (event) => {
    event.preventDefault();
    await dispatch(signin(user));
    navigation.replace("Home");
    if (users !== "null") {
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

        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => setUser(values)}
          validationSchema={yup.object().shape({
            username: yup.string().required("Please, provide your user name!"),
            password: yup
              .string()
              .min(8, "Password must be more than 8 chars.")
              .required(),
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

              <ButtonStyle
                title="Submit"
                disabled={!isValid}
                onPress={
                  user.username && user.password ? OnSubmit : handleSubmit
                }
              />
              <Text
                style={{ marginTop: 25 }}
                onPress={() => navigation.navigate("SignUp")}
              >
                Don't have an account?
                <Text style={{ fontWeight: "bold" }}> Sign Up!</Text>
              </Text>
            </View>
          )}
        </Formik>
      </Signin>
    </ScrollView>
  );
}
