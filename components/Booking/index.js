//React imports
import { Picker } from "native-base";
import React, { useState } from "react";
import { Text } from "react-native";
import DatePicker from "react-native-datepicker";
import { ScrollView } from "react-native-gesture-handler";
import NumericInput from "react-native-numeric-input";
import { RadioButton, Button, Searchbar } from "react-native-paper";
import { useSelector } from "react-redux";

//Styles
import { Infoview, Radioview, Title, Numview, Num } from "./styles";

export default function Booking() {
  const [checked, setChecked] = useState(false);
  const [query, setQuery] = useState("");
  const [flight, setFlight] = useState({
    departureAirport: null,
    arrivalAirport: "",
    departureDate: "",
    returnDate: null,
    flightType: "oneway",
    passengers: 0,
  });
  const airports = useSelector((state) => state.airportReducer.airports);

  const departureAirports = airports
    // .filter((airport) =>
    //   airport.name.toLowerCase().includes(query.toLowerCase())
    // )
    .map((airport) => ({
      name: airport.name,
      location: airport.location,
      id: airport.id,
    }));

  const arrivalAirports = airports
    // .filter(
    //   (airport) => !airport.name.toLowerCase().includes(query.toLowerCase())
    // )
    .filter((airport) => airport.id !== flight.departureAirport)
    .map((airport) => ({
      name: airport.name,
      location: airport.location,
      id: airport.id,
    }));

  const round = () => {
    setChecked(true);
    setFlight({ ...flight, flightType: "roundtrip" });
  };

  const oneway = () => {
    setChecked(false);
    setFlight({ ...flight, flightType: "oneway", returnDate: "" });
  };
  return (
    <ScrollView>
      <Infoview>
        <Searchbar
          value={query}
          style={{ width: "95%" }}
          placeholder="Search"
          onChangeText={(event) => setQuery(event)}
        ></Searchbar>

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
            status={checked === true ? "checked" : "unchecked"}
            onPress={round}
          />
          <Text>Round Trip</Text>
          <RadioButton
            status={checked === false ? "checked" : "unchecked"}
            onPress={oneway}
          />
          <Text>One Way</Text>
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
          onPress={() => alert(JSON.stringify(flight, null, 4))}
        >
          Search
        </Button>
      </Infoview>
    </ScrollView>
  );
}
