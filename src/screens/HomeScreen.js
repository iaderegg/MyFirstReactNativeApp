import { Button, SafeAreaView, Text } from "react-native";

export default function HomeScreen({ navigation }) {

  const goToSettings = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button title="Settings" onPress={goToSettings} />
    </SafeAreaView>
  );
}


