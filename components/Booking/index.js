//React imports
import { Picker } from "native-base";
import React, { useState } from "react";
import { Text } from "react-native";
import DatePicker from "react-native-datepicker";
import { ScrollView } from "react-native-gesture-handler";
import NumericInput from "react-native-numeric-input";
import { RadioButton, Button, Searchbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

//Styles
import { Infoview, Radioview, Title, Numview, Num } from "./styles";

//Actions
import { fetchFlights } from "../../store/actions/flightActions";

export default function Booking() {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [seatchecked, setSeatChecked] = useState(false);
  const [query, setQuery] = useState("");
  const [flight, setFlight] = useState({
    departureAirport: null,
    arrivalAirport: "",
    departureDate: "",
    returnDate: null,
    flightType: "oneway",
    seatType: "economy",
    passengers: 0,
  });

  const navigation = useNavigation();

  const airports = useSelector((state) => state.airportReducer.airports);

  const departureAirports = airports.map((airport) => ({
    name: airport.name,
    location: airport.location,
    id: airport.id,
  }));

  const arrivalAirports = airports
    // .filter((airport) => airport.id !== flight.departureAirport)
    .map((airport) => ({
      name: airport.name,
      location: airport.location,
      id: airport.id,
    }));

  const roundOrone = () => {
    checked
      ? (setChecked(false),
        setFlight({ ...flight, flightType: "oneway", returnDate: "" }))
      : (setChecked(true), setFlight({ ...flight, flightType: "roundtrip" }));
  };

  const seats = () => {
    seatchecked
      ? (setSeatChecked(false), setFlight({ ...flight, seatType: "economy" }))
      : (setSeatChecked(true), setFlight({ ...flight, seatType: "buisness" }));
  };

  const handleSearch = () => {
    flight.departureAirport === flight.arrivalAirport
      ? alert("You can't depart & arrive from the SAME airport! ")
      : (dispatch(fetchFlights(flight)), navigation.navigate("FlightList"));
  };

  return (
    <ScrollView>
      {/* <Searchbar
          value={query}
          style={{ width: "95%" }}
          placeholder="Search"
          onChangeText={(event) => setQuery(event)}
        ></Searchbar> */}

      <Radioview>
        <RadioButton
          status={checked === true ? "checked" : "unchecked"}
          onPress={roundOrone}
        />
        <Text>Round Trip</Text>
        <RadioButton
          status={checked === false ? "checked" : "unchecked"}
          onPress={roundOrone}
        />
        <Text>One Way</Text>
      </Radioview>

      <Infoview>
        <Title>From</Title>
        <Picker
          mode="dropdown"
          id="departureAirport"
          style={{ width: 280 }}
          placeholder="Departure Airport"
          selectedValue={flight.departureAirport}
          onValueChange={(departureAirport) =>
            setFlight({ ...flight, departureAirport })
          }
        >
          {departureAirports.map((airport) => (
            <Picker.Item
              label={`${airport.name}, ${airport.location}`}
              value={airport.id}
              key={airport.id}
            />
          ))}
        </Picker>

        <Title>To</Title>
        <Picker
          mode="dropdown"
          id="arrivalAirport"
          style={{ width: 280 }}
          placeholder="Arrival Airport"
          selectedValue={flight.arrivalAirport}
          onValueChange={(arrivalAirport) =>
            setFlight({ ...flight, arrivalAirport })
          }
        >
          {arrivalAirports.map((airport) => (
            <Picker.Item
              label={`${airport.name}, ${airport.location}`}
              value={airport.id}
              enabled={flight.departureAirport ? true : false}
              key={airport.id}
            />
          ))}
        </Picker>

        <Radioview>
          <RadioButton
            status={seatchecked === false ? "checked" : "unchecked"}
            onPress={seats}
          />
          <Text>Economy</Text>
          <RadioButton
            status={seatchecked === true ? "checked" : "unchecked"}
            onPress={seats}
          />
          <Text>Business</Text>
        </Radioview>

        <Numview>
          <Num>No. of Passengers</Num>
          <NumericInput
            rounded="true"
            minValue="0"
            maxValue="6"
            onChange={(passengers) => setFlight({ ...flight, passengers })}
          />
        </Numview>

        <Numview>
          <Num>Departure Date</Num>
          <DatePicker
            date={flight.departureDate} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate={new Date()}
            maxDate="2021-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(departureDate) => {
              setFlight({ ...flight, departureDate });
            }}
          />
        </Numview>

        {checked && (
          <Numview>
            <Num>Arrival Date</Num>
            <DatePicker
              date={flight.returnDate} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate={new Date()}
              maxDate="2021-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(returnDate) => {
                setFlight({ ...flight, returnDate });
              }}
            />
          </Numview>
        )}
        <Button
          style={{ width: "90%", marginTop: 25, marginBottom: 25 }}
          icon="shield-search"
          mode="contained"
          onPress={handleSearch}
        >
          Search
        </Button>
      </Infoview>
    </ScrollView>
  );
}
