import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {

  const goToSettings = () => {
    navigation.navigate("Settings");
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Settings" onPress={goToSettings} />
    </View>
  );
}


