import { StyleSheet, Text, View } from 'react-native';
import Greet from './src/components/Greet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My first React Native App</Text>
      <Greet name="Iader G" />
      <Greet name="User 2" />
      <Greet />
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
