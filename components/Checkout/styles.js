import { Button, Text } from "native-base";
import styled from "styled-components/native";

export const SignButtonStyle = styled(Button)`
  margin: 6% 0 10% 34%;
  width: 30%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyle = styled.Button`
  margin: 60% 0 10% 34%;
  align-items: center;
  justify-content: center;
`;

export const Signin = styled.View`
  margin-top: 25%;
  margin-left: 14%;
  width: 70%;
  align-items: center;
`;
export const MainView = styled.View`
  margin: 9% 0;
  width: 70%;
  display: flex;
  align-self: center;
`;

export const AuthTextInput = styled.TextInput`
  text-align: left;
  height: 40px;
  width: 150px;
  border-bottom-width: 1px;
`;

export const Errtext = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #ff0d10;
`;

export const ViewRow = styled.View`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  align-self: center;
`;

export const ViewColumn = styled.View`
  margin-right: 17px;
  display: flex;
  flex-direction: column;
`;

export const ViewOthers = styled.View`
  margin-bottom: 25px;
  align-self: center;
`;

export const Title = styled.Text`
  margin-top: 35px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;
