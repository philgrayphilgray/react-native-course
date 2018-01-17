import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ListItem from "./src/components/ListItem/ListItem";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  };
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: prevState.placeName,
          image: {
            uri:
              "https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?auto=format&fit=crop&w=2000&q=80"
          }
        }),
        placeName: ""
      };
    });
  };

  onItemSelected = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDelete={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          placeName={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          onPress={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.onItemSelected}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
