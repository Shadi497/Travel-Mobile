//React imports
import { Text, ToastAndroid } from "react-native";
import React from "react";
import { Icon } from "native-base";
import { useDispatch, useSelector } from "react-redux";

//Styles
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

//Actions imports
import {
  clearProfile,
  profile,
  signout,
} from "../../store/actions/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);
  const checkProfile = useSelector((state) => state.authReducer.profile);
  checkProfile === null && user && dispatch(profile(user.username));

  const Out = async (event) => {
    event.preventDefault();
    await dispatch(signout());
    await dispatch(clearProfile());
    ToastAndroid.show(`See you soon 😔`, ToastAndroid.SHORT, ToastAndroid.TOP);
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
        <ButtonStyled onPress={() => navigation.navigate("Booking")}>
          Explore the world{" "}
          <Icon
            name="airplane-sharp"
            type="Ionicons"
            style={{ color: "white" }}
          ></Icon>
        </ButtonStyled>
      </BottomStyling>
      <Welcome>
        {checkProfile && (
          <>
            <Icon
              name="account-circle"
              type="MaterialCommunityIcons"
              style={{ color: "white" }}
              onPress={() => navigation.navigate("Profile")}
            ></Icon>
            <UserTitle onPress={() => navigation.navigate("Profile")}>
              {`  Welcome `}
              <Text style={{ fontWeight: "bold" }}>
                {checkProfile.firstName}
              </Text>
              {`    `}
            </UserTitle>
            <Icon
              name="sign-out"
              type="FontAwesome"
              style={{ color: "white" }}
              onPress={Out}
            ></Icon>
          </>
        )}
      </Welcome>
      {!user && (
        <SignOutButtonStyle onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ color: "white", fontSize: 22 }}>Sign In</Text>
        </SignOutButtonStyle>
      )}
    </HomeBackground>
  );
};

export default Home;
