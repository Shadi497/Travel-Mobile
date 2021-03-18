//React imports
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import moment from "moment";

//Styles
import {
  Txt,
  Price,
  Date,
  MainView,
  TxtFlight,
  FlightView,
  AirportView,
  CardStyle,
} from "./styles";
import { Button } from "react-native";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFightId } from "../../store/actions/bookingActions";
import { useNavigation } from "@react-navigation/native";
import { fetchSecondFlights } from "../../store/actions/flightActions";
import FlightListOutbound from "../FlightListOutbound";
import { ScrollView } from "react-native-gesture-handler";

export default function FlightList({
  flightList,
  setflightId,
  oneway,
  type,
  setSecondDate,
  firstFlight,
  secondDate,
  setsecondflightId,
  secondFlight,
}) {
  const [selected, setSelected] = useState(false);

  const handleBooking = (flightId, arrivalDate) => {
    if (oneway === "oneway" && type === "inbound") {
      setflightId(flightId);
      setSelected(true);
    } else if (oneway === "roundtrip" && type === "inbound") {
      setflightId(flightId);
      setSecondDate(arrivalDate);
      setSelected(true);
    } else if (oneway === "roundtrip" && type === "outbound") {
      setflightId(flightId);
      setSelected(true);
    }
  };

  const [play, setPlay] = useState(false);

  const flightInfo = useSelector((state) => state.bookingReducer.flightInfo);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleGetIds = () => {
    // dispatch(getFightId([firstFlight], ));
    if (flightInfo.flightType === "oneway") {
      dispatch(getFightId([firstFlight], navigation.navigate("Checkout")));
    } else if (flightInfo.flightType === "roundtrip") {
      dispatch(
        getFightId([firstFlight, secondFlight], navigation.navigate("Checkout"))
      );
    }
  };

  const row = flightList.map((flight) => (
    <>
      <CardStyle
        bordered
        button
        onPress={() => handleBooking(flight.id, flight.arrivalDate)}
        style={{
          borderColor:
            firstFlight && firstFlight === flight.id ? "blue" : "black",
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
            {firstFlight && firstFlight === flight.id && (
              <Icon type="entypo" name="check" size={25} />
            )}
          </FlightView>
          <Price>{flight.price} BD</Price>
        </MainView>
      </CardStyle>
    </>
  ));

  const handleSearch = () => {
    dispatch(fetchSecondFlights(flightInfo, secondDate)),
      // navigation.navigate("FlightListOutbound"),
      setPlay(true);
  };

  return (
    <ScrollView>
      {oneway === "roundtrip" && <TxtFlight>Choose the first Flight</TxtFlight>}
      {row}
      {oneway === "oneway" ? (
        <View
          style={{
            width: "50%",
            marginTop: 25,
            marginBottom: 55,
            alignSelf: "center",
          }}
        >
          <Button
            icon="shield-search"
            mode="contained"
            title="Book"
            disabled={!firstFlight ? true : false}
            onPress={handleGetIds}
          />
        </View>
      ) : (
        <>
          <View
            style={{
              width: "50%",
              marginTop: 25,
              marginBottom: 45,
              alignSelf: "center",
            }}
          >
            <Button
              style={{ width: "90%", marginTop: 25 }}
              icon="shield-search"
              mode="contained"
              disabled={firstFlight === null ? true : false}
              onPress={handleSearch}
              title="Return Flight"
            />
          </View>
          {play && (
            <>
              <TxtFlight>Choose the second Flight</TxtFlight>

              <FlightListOutbound
                setsecondflightId={setsecondflightId}
                secondFlight={secondFlight}
              />
              <View
                style={{ width: "50%", marginBottom: 55, alignSelf: "center" }}
              >
                <Button
                  icon="shield-search"
                  mode="contained"
                  title="Book"
                  disabled={!secondFlight ? true : false}
                  onPress={handleGetIds}
                />
              </View>
            </>
          )}
        </>
      )}
    </ScrollView>
  );
}
