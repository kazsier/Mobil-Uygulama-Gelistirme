import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { withFirebaseHOC } from "../config/Firebase";

class searchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
        <StatusBar hidden={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withFirebaseHOC(searchScreen);