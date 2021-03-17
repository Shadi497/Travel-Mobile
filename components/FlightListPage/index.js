import React from "react";
import { View, Text } from "react-native";
import { useState } from "react";
import FlightList from "../FlightList";
import { useSelector } from "react-redux";

export default function FlightListPage() {
  const flightsInbound = useSelector((state) => state.flightReducer.inbound);
  const flightInfo = useSelector((state) => state.bookingReducer.flightInfo);

  const [firstFlightId, setFirstflightId] = useState(null);
  const [secondFlightId, setSecondflightId] = useState();
  const [secondDate, setSecondDate] = useState();

  return (
    <View>
      <FlightList
        flightList={flightsInbound}
        setflightId={setFirstflightId}
        oneway={flightInfo.flightType}
        type={"inbound"}
        setSecondDate={setSecondDate}
        firstFlight={firstFlightId}
        secondDate={secondDate}
        setsecondflightId={setSecondflightId}
        secondFlight={secondFlightId}
      />
    </View>
  );
}
