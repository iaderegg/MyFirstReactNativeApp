import { Button, Text, View } from 'react-native';
import React from 'react';

export default function SettingsScreen({ navigation }) {

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="Home" onPress={() => goToPage("Home")} />
    </View>
  )
}