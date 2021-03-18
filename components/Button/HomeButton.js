import { Icon } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const HomeButton = () => {
  const navigation = useNavigation();

  return (
    <Icon
      type="Entypo"
      name="home"
      style={{ marginRight: 12 }}
      onPress={() => navigation.navigate("Home")}
    />
  );
};
