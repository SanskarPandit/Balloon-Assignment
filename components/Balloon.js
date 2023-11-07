import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity } from "react-native";
const BalloonAnimation = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("UserForm");
  };
  const [isInflated, setIsInflated] = useState(false);

  const handlePress = () => {
    setIsInflated(!isInflated);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          <View
            style={isInflated ? styles.inflatedBalloon : styles.deflatedBalloon}
          >
            <Text style={styles.balloonText}>🎈</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          title="Go to Form"
          onPress={handleNavigate}
          style={styles.formNavigtor}
        >
          <Text style={{ color: "white" }}> Go to Form </Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>
          Click on the balloon to inflat and deflat !!
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deflatedBalloon: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  inflatedBalloon: {
    width: 130,
    height: 130,
    backgroundColor: "red",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  balloonText: {
    fontSize: 24,
    color: "white",
  },
  formNavigtor: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "skyblue", // Button background color
    padding: 10,
    borderRadius: 8, // Rounded corners
    elevation: 5,
  },
  infoText: {
    marginTop: 25,
    fontSize: 15,
  },
});

export default BalloonAnimation;
