/** @format */

import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView styles={styles.container}>
      <View styles={styles.view1}>
        <Text style={styles.te}>odriin mend</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    margin: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view1: {
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
  },
  tex: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 50,
  },
});
