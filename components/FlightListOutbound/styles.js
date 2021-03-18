import styled from "styled-components/native";
import { CardItem } from "native-base";

export const CardStyle = styled(CardItem)`
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  border-width: 2px;
  border-bottom-width: 2px;
`;

export const Txt = styled.Text`
  margin: 0 10px 0 12px;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
`;

export const NoFlights = styled.Text`
  text-align: center;
  font-size: 15px;
  margin: 15px 0;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: red;
  text-align: right;
  margin: 15px 15px 0 0;
`;

export const Date = styled.Text`
  margin: 0 10px 0 12px;
  text-align: center;
  font-size: 13px;
`;

export const MainView = styled.View`
  display: flex;
  flex-direction: column;
`;

export const FlightView = styled.View`
  display: flex;
  flex-direction: row;
`;

export const AirportView = styled.View`
  display: flex;
  margin-top: 2px;
  justify-content: space-around;
  height: 75px;
  width: 158px;
`;
