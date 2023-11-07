import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const handleSubmit = async () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!name || !email) {
      return false;
    }
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      if (response) {
        const data = await response.json();
        console.log("API Response:", data);
      } else {
        console.error("API Error:", response);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
    setEmail("");
    setName("");
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {nameError ? (
        <Text style={styles.error}> Name is not valid! </Text>
      ) : null}
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      {emailError ? (
        <Text style={styles.error}>Email is Not Valid </Text>
      ) : null}
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 20,
    textAlign: "center",
    borderColor: "skyblue",
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginLeft: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 7,
    elevation: 4,
    backgroundColor: "skyblue",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
  },
  text: {
    fontSize: 16.5,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
  },
});

export default UserForm;
