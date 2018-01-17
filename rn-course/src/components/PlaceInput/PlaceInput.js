import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const PlaceInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="an awesome place"
        value={props.placeName}
        onChangeText={props.onChangeText}
      />
      <Button title="Add" style={styles.placeButton} onPress={props.onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
