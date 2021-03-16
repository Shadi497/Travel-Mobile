import styled from "styled-components/native";

export const Txt = styled.Text`
  margin: 0 10px 0 12px;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: red;
  text-align: right;
  margin-top: 15px;
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
