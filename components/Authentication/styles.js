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
export const Signup = styled.View`
  margin-top: 11%;
  margin-left: 14%;
  width: 70%;
  align-items: center;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  width: 250px;
  border-bottom-width: 1px;
`;

export const Errtext = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #ff0d10;
`;
