//React imports
import { Card, CardItem, Container } from "native-base";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import moment from "moment";

import { useSelector } from "react-redux";

//Styles
import { Txt, Price, Date, MainView, FlightView, AirportView } from "./styles";

export default function FlightList() {
  const flights = useSelector((state) => state.flightReducer.inbound);
  const [flightId, setFlightId] = useState();
  const handleChange = (flightId) => {
    setFlightId(flightId);
  };

  const handle = () => {
    alert("Selected");
  };

  const row = flights.map((flight) => (
    <>
      <Card style={{ marginTop: 15 }}>
        <CardItem button onPress={handle} style={{ marginTop: 5 }}>
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
            </FlightView>
            <Price>{flight.price} BD</Price>
          </MainView>
        </CardItem>
      </Card>
    </>
  ));

  return row;
}
