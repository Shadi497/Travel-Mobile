import { Icon } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const SignInButton = () => {
  const navigation = useNavigation();

  return (
    <Icon
      type="MaterialCommunityIcons"
      name="account-circle"
      style={{ marginRight: 12 }}
      onPress={() => navigation.navigate("SignIn")}
    />
  );
};
