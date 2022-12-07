import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <Text>My Login Form</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="LogIn" onPress={() => console.log("Sending...")} />
    </View>
  );
}
