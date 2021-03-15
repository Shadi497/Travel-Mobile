import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

//Styles
import {
  NoBooking,
  TitleBookingHistory,
  TitleHistory,
  Infoview,
} from "./styles";

export default function ProfileBookingHistory() {
  const booking = useSelector((state) => state.authReducer.booking);

  const row =
    booking.length > 0 ? (
      booking.map((book) => (
        <>
          <TitleBookingHistory>Booking No. {book.id}</TitleBookingHistory>
          <Text>
            {`From:  `}
            <TitleHistory>{book.flights[0].departureAirport.name}</TitleHistory>
          </Text>
          <Text>
            {`To:  `}
            <TitleHistory>{book.flights[0].arrivalAirport.name}</TitleHistory>
          </Text>
          <Text>
            {`Price:  `}
            <TitleHistory>{book.flights[0].price} BD</TitleHistory>
          </Text>
          <Text>{book.flights.length == 2 ? "Round Trip" : "One Way"}</Text>

          <Text>
            {`Booked at:  `}
            <TitleHistory>
              {new Date(book.createdAt).toLocaleDateString()}
            </TitleHistory>
          </Text>
        </>
      ))
    ) : (
      <NoBooking>You don't have any bookings!</NoBooking>
    );
  return <Infoview>{row}</Infoview>;
}
