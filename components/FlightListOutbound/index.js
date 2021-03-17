//React imports
import React from "react";
import { Icon } from "react-native-elements";
import moment from "moment";

//Styles
import {
  Txt,
  Price,
  Date,
  MainView,
  FlightView,
  AirportView,
  CardStyle,
} from "./styles";

import { useSelector } from "react-redux";

export default function FlightListOutbound({
  setsecondflightId,
  secondFlight,
}) {
  const flightsOutbound = useSelector((state) => state.flightReducer.outbound);

  const handleBooking = (flightId, arrivalDate) => {
    setsecondflightId(flightId);
  };

  const row = flightsOutbound.map((flight) => (
    <>
      <CardStyle
        bordered
        button
        onPress={() => handleBooking(flight.id, flight.arrivalDate)}
        style={{
          borderColor:
            secondFlight && secondFlight === flight.id ? "blue" : "black",
        }}
      >
        <MainView>
          <FlightView>
            <AirportView>
              <Icon type="font-awesome-5" name="plane-departure" size={17} />
              <Txt>{flight.departureAirport.name}</Txt>
              <Date>{moment(flight.departureDate).format("lll")}</Date>
            </AirportView>
            <AirportView>
              <Icon
                type="font-awesome-5"
                name="plane-arrival"
                style={{ marginLeft: 12 }}
                size={17}
              />
              <Txt>{flight.arrivalAirport.name}</Txt>
              <Date>{moment(flight.arrivalDate).format("lll")}</Date>
            </AirportView>
            {secondFlight && secondFlight === flight.id && (
              <Icon type="entypo" name="check" size={25} />
            )}
          </FlightView>
          <Price>{flight.price} BD</Price>
        </MainView>
      </CardStyle>
    </>
  ));

  return <>{row}</>;
}
