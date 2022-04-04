import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";

export class Menu extends React.Component {
  onPressAlert = () => {
    Alert.alert("You tapped the Alert button!");
  };

  render() {
    return (
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={this.onPressAlert}
        >
          <Text style={styles.buttonText}>ALERT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => this.props.navigate("ScheduleRT")}
        >
          <Text style={styles.buttonText}>SCHEDULE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => this.props.navigate("InputsRT")}
        >
          <Text style={styles.buttonText}>INPUTS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#ffffff",
  },
  buttonStyles: {
    backgroundColor: "#35605a",
    width: "50%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
  },
});
