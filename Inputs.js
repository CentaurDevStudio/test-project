import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Header } from "./Header.js";

export class Inputs extends React.Component {
  onPressSave = () => {
    Alert.alert("Data is saved!");
  };
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Header message="Press to Login" />

        <Text>Student:</Text>
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={this.onPressSave}
        >
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyles: {
    backgroundColor: "#35605a",
    width: "50%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
