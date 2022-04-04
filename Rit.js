import React from "react";
import { StyleSheet, Image } from "react-native";

export class Rit extends React.Component {
  render() {
    return (
      <Image
        style={styles.image1}
        source={require("../img/ritimage1.png")}
      ></Image>
    );
  }
}

const styles = StyleSheet.create({
  image1: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
});
