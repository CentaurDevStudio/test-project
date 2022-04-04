// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { View } from "react-native";
import { Home } from "./view/Home.js";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Schedule } from "./view/Schedule.js";
import { Inputs } from "./view/Inputs.js";
// import { AppLoading, Asset, Font, Icon } from "expo";

// function App() {
//   return (
//     <View>
//       <Home></Home>
//     </View>
//   );
// }

const MyRoutes = createStackNavigator(
  {
    HomeRT: {
      screen: Home,
    },
    ScheduleRT: {
      screen: Schedule,
    },
    InputsRT: {
      screen: Inputs,
    },
  },
  {
    initialRouteName: "HomeRT",
  }
);

export default AppContainer = createAppContainer(MyRoutes);
