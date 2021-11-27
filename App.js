import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Title, Button, } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.titulo}>MyApp</Text>
      </View>
      <View style={styles.containerBottom}>
        <View >
          <Text style={styles.saudacao}>Welcome</Text>
        </View>
        <View style={styles.borderStyle}>

          <TextInput
            style={styles.input}
            placeholder="Email"
          />
        </View>
        <View style={styles.borderStyle}>

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true} 
          />
        </View>
        <View style={styles.styleButton}>
          <Button
            style={styles.button}
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
        <Text
          style={styles.linking}
          onPress={() => Linking.openURL('http://google.com')}
        >Forgot your password ?</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 40,
    color: "#68a8fc",
    textAlign: "center",
    marginTop: 45,
  },
  containerTop: {
    flex: 2,
    // backgroundColor: 'blue',
    width: '90%',
    top: '5%'
  },
  containerBottom: {
    flex: 3,
    // backgroundColor: 'pink',
    width: '90%',
    bottom: '5%',
  },
  saudacao: {
    textAlign: 'left',
    marginLeft: 12,
    color: "#a1a1a1",
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    // margin: 10,
    marginTop: 30,
    marginLeft: 12,
    marginRight: 12,
    padding: 7,
    borderRadius: 6,
  },
  styleButton: {
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    borderRadius: 10,
  },
  linking: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 15,
  },

});
