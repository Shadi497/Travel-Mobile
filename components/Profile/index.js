//React Imports
import { useSelector } from "react-redux";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

//Styles
import { Title, Detailtxt, Infoview } from "./styles";

export default function Profile() {
  const navigation = useNavigation();

  const checkProfile = useSelector((state) => state.authReducer.profile);

  return (
    checkProfile && (
      <Infoview>
        <Title> Name</Title>
        <Detailtxt>
          {checkProfile.firstName} {checkProfile.lastName}
        </Detailtxt>
        <Title> Phone Number </Title>
        <Detailtxt> {checkProfile.phoneNumber}</Detailtxt>
        <Title> Email </Title>
        <Detailtxt> {checkProfile.email}</Detailtxt>
        <Title> Date of Birth </Title>
        <Detailtxt> {checkProfile.dateOfBirth}</Detailtxt>
        <Button
          style={{ width: "90%" }}
          icon="account-edit"
          mode="contained"
          onPress={() => navigation.navigate("UpdateProfile")}
        >
          Edit
        </Button>
      </Infoview>
    )
  );
}
