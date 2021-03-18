//React imports
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

//Styles
import {
  Signup,
  AuthTextInput,
  ButtonStyle,
  Errtext,
  ViewRow,
  ViewColumn,
  Title,
  ViewOthers,
  MainView,
} from "./styles";

//Verification
import { Formik } from "formik";
import * as yup from "yup";
import { ToastAndroid } from "react-native";
import {
  bookFlight,
  getPassengerInfo,
} from "../../store/actions/bookingActions";

export default function Checkout() {
  const booking = useSelector((state) => state.bookingReducer);
  const flightSeatsType = booking.flightInfo.seatType;
  const passengers = booking.flightInfo.passengers;
  const user = useSelector((state) => state.authReducer.user);

  const [passenger, setPassenger] = useState();

  const dispatch = useDispatch();

  const OnSubmit = (event) => {
    // event.preventDefault();
    dispatch(getPassengerInfo(passenger));
    ToastAndroid.show(`Added Passenger`, ToastAndroid.SHORT);
  };

  const handleBooking = () => {
    if (flightSeatsType === "economy") {
      bookFlight(
        {
          passengers: booking.passengers,
          flights: booking.flights,
          economySeats: passengers,
        },
        user
      );
    } else if (flightSeatsType === "buisness") {
      bookFlight(
        {
          passengers: booking.passengers,
          flights: booking.flights,
          businessSeats: passengers,
        },
        user
      );
    }
  };

  return (
    <ScrollView>
      <Title>Passenger Details</Title>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        }}
        onSubmit={(values) => setPassenger(values)}
        validationSchema={yup.object().shape({
          email: yup.string().email().required("Please, provide your email!"),
          firstName: yup.string().required("Please, provide your first name!"),
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
            {[...Array(booking.flightInfo.passengers)].map((x, index) => (
              <ViewRow>
                <ViewColumn>
                  <AuthTextInput
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    placeholder={`Passenger ${index + 1} First Name`}
                    onBlur={() => setFieldTouched("firstName")}
                  />
                  {touched.firstName && errors.firstName && (
                    <Errtext>FirstName is required !</Errtext>
                  )}
                </ViewColumn>
                <ViewColumn>
                  <AuthTextInput
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    placeholder={`Passenger ${index + 1} Last Name`}
                    onBlur={() => setFieldTouched("lastName")}
                  />
                  {touched.lastName && errors.lastName && (
                    <Errtext>LastName is required !</Errtext>
                  )}
                </ViewColumn>
              </ViewRow>
            ))}
            <MainView>
              <ViewOthers>
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
              </ViewOthers>
              <ViewOthers>
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
              </ViewOthers>
              <ButtonStyle
                title="Add Passenger"
                disabled={!isValid}
                onPress={passenger ? OnSubmit : handleSubmit}
              />
            </MainView>
          </View>
        )}
      </Formik>
      <ButtonStyle
        title="Book Your Flight"
        disabled={booking.passengers.length !== 0 ? false : true}
        onPress={handleBooking}
      />
    </ScrollView>
  );
}
