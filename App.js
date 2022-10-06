import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

class PinRow {
  constructor(input_row) {
    this.row = input_row;
  }
  _image_from_index(input_index) {
    switch (input_index) {
      case 0:
        return require("./pics/pin1.png");
      case 1:
        return require("./pics/pin2.png");
      case 2:
        return require("./pics/pin3.png");
      case 3:
        return require("./pics/pin4.png");
      case 4:
        return require("./pics/pin5.png");
      case 5:
        return require("./pics/pin6.png");
      case 6:
        return require("./pics/pin7.png");
      case 7:
        return require("./pics/pin8.png");
    }
  }
  render() {
    let pin_pics = [];

    for (let i = 0; i < this.row.length; i++) {
      let image_index = this.row[i];
      pin_pics[i] = this._image_from_index(image_index);
    }

    return (
      <FlatList
        data={pin_pics}
        horizontal={true}
        renderItem={({ item }) => (
          <Image source={item} style={{ width: 50, height: 50 }} />
        )}
      />
    );
  }
}

export default function App() {
  let pin_row1 = new PinRow([0, 1, 2, 6]); //input from here goes to the constructor
  let pin_row2 = new PinRow([4, 7, 7]); //input from here goes to the constructor
  let pin_row3 = new PinRow([5, 1, 3, 2]); //input from here goes to the constructor

  return (
    <View style={{ backgroundColor: "sandybrown", flex: 1 }}>
      <View style={{ flex: 0.05 }} />
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 3 }}>
          <View style={{ flex: 0.15 }}>
            <Text>Current Selection</Text>
            {pin_row1.render()}
          </View>
          <View style={{ flex: 0.15 }}>
            <Text>Responses</Text>
            {pin_row2.render()}
          </View>
          <View style={{ flex: 0.7 }}>
            <Text>Click History</Text>
            {pin_row3.render()}
          </View>
        </View>
        <View style={{ flex: 2, backgroundColor: "green" }}>
          <Image
            source={require("./pics/mastermind.png")}
            style={{ resizeMode: "stretch", flex: 1, width: "auto" }}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
