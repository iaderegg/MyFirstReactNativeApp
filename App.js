import { StyleSheet, Text, View } from 'react-native';
import Greet from './src/components/Greet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My first React Native App</Text>
      <Greet firstname="Iader" lastname="Garcia" />
      <Greet firstname="User" lastname="Two" />
      <Greet firstname="User" lastname="Three" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
