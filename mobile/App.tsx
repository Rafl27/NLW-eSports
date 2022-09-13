import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>E aí mSSeu bom</Text>
      <Button title='Send 1'/>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string,
}

const Button = (props : ButtonProps) => {
  return(
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#FFF',
    fontSize: 30,
  }
});
