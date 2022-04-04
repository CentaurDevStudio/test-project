import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./Header.js";
import { Rit } from "./Rit.js";
import { Menu } from "./Menu.js";
import { StackNavigator } from "react-navigation";

export class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header message="Press to Login" />
        <Rit />
        <Menu navigate={navigate} />
        <Rit />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
