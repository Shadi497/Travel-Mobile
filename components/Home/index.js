import { Text, ToastAndroid } from "react-native";
import React from "react";
import {
  Title,
  TopStyling,
  HomeBackground,
  BottomStyling,
  ButtonStyled,
  UserTitle,
  SignOutButtonStyle,
  Welcome,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../store/actions/authActions";
import { Icon } from "native-base";

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const Out = async (event) => {
    event.preventDefault();
    await dispatch(signout());
    ToastAndroid.show(
      `Bye ${user.username}`,
      ToastAndroid.SHORT,
      ToastAndroid.TOP
    );
  };
  return (
    <HomeBackground
      source={{
        uri:
          "https://res.cloudinary.com/grohealth/image/upload/q_30/v1581674833/DCUK/Content/Plane-3.jpg",
      }}
    >
      <TopStyling>
        <Title>Travel Go</Title>
      </TopStyling>
      <BottomStyling>
        {/* <ButtonStyled onPress={() => navigation.navigate("ShopList")}>
          Shop List
        </ButtonStyled> */}
      </BottomStyling>
      <Welcome>
        {user && <UserTitle>{`Welcome ${user.username} `}</UserTitle>}
        {user && (
          <Icon
            name="sign-out"
            type="FontAwesome"
            style={{ color: "white" }}
            onPress={Out}
          ></Icon>
        )}
      </Welcome>
      {!user && (
        <SignOutButtonStyle onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </SignOutButtonStyle>
      )}
    </HomeBackground>
  );
};

export default Home;
