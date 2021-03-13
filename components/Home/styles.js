import { Button, Text } from "native-base";
import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  resize-mode: stretch;
`;

export const TopStyling = styled.View`
  align-items: center;
  justify-content: center;
  height: 40%;
`;

export const Title = styled.Text`
  color: black;
  font-size: 38px;
  text-align: center;
  font-weight: bold;
`;

export const BottomStyling = styled.View`
  height: 18%;
  justify-content: center;
`;

export const Welcome = styled.Text`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20%;
`;

export const UserTitle = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  margin-right: 225px;
`;

export const ButtonStyled = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  margin-left: 25px;
`;

export const SignOutButtonStyle = styled.Text`
  width: 100%;
  text-align: center;
  margin-top: 45px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 1px;
`;

export const SignButtonStyle = styled(Button)`
  margin: 6% 0 10% 34%;
  width: 30%;
  align-items: center;
  justify-content: center;
`;
