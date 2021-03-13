//React imports
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import DatePicker from "react-native-datepicker";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { profileEdit } from "../../store/actions/authActions";

//Styles
import { AuthTextInput, Title, Txt } from "./styles";

export default function UpdateProfile() {
  const checkProfile = useSelector((state) => state.authReducer.profile);

  const [user, setUser] = useState(checkProfile);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(profileEdit(user));

    navigation.replace("Home");
  };

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Txt>Edit your Profile </Txt>
        <Title> First Name</Title>

        <AuthTextInput
          value={user.firstName}
          onChangeText={(firstName) => setUser({ ...user, firstName })}
          placeholder="First Name"
        ></AuthTextInput>

        <Title> Last Name</Title>

        <AuthTextInput
          value={user.lastName}
          onChangeText={(lastName) => setUser({ ...user, lastName })}
          placeholder="Last Name"
        ></AuthTextInput>

        <Title> Email</Title>

        <AuthTextInput
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
          placeholder="Email"
        ></AuthTextInput>

        <Title> Phone Number</Title>

        <AuthTextInput
          value={user.phoneNumber}
          onChangeText={(phoneNumber) => setUser({ ...user, phoneNumber })}
          placeholder="gender"
        ></AuthTextInput>

        <Title> Date of Birth</Title>

        <DatePicker
          style={{ marginTop: 11, marginBottom: 0, width: 155 }}
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
              width: 25,
            },
            dateInput: {},
          }}
          onDateChange={(dateOfBirth) => setUser({ ...user, dateOfBirth })}
        />

        <Button
          style={{ width: "90%", marginTop: 20 }}
          mode="contained"
          onPress={handleSubmit}
        >
          Save Changes
        </Button>
      </View>
    </ScrollView>
  );
}
