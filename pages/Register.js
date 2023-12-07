import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Login } from './Login';

export const Register = ({ navigation }) => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const RegisterButton = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.replace("Tesla Home Page");
      console.log(user);
    })
    .catch((error) => {
      alert(error.message);
    });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
    <Image style={styles.logo} source={require('./tesla.png')}></Image>

      <Input style={styles.input} 
            placeholder="Full Name"
            value={name}
            onChangeText={text => setName(text)}
            />
      <Input style={styles.input} 
            placeholder="Email" 
            focusable 
            value={email}
            onChangeText={text => setEmail(text)}
            />
      <Input style={styles.input} 
            placeholder="Password" 
            secureTextEntry 
            type='password'
            value={password}
            onChangeText={text => setPassword(text)}
            />

      <Button style={styles.button} 
              title="SIGN UP" 
              buttonStyle={{ backgroundColor: "black" }}
              onPress={RegisterButton}
              />
      <Button style={styles.button} 
              title="BACK TO LOGIN" 
              type="outline" 
              buttonStyle={{ borderColor: 'black' }}
              titleStyle={{ color: 'black' }}
              onPress={()=> navigation.navigate(Login)}
              />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
    width: 300,
  }, 
  button: {
    width: 200,
    borderRadius: 10,
    opacity: 10,
    padding: 5,
    paddingTop: 15,
  },
  input: {
    width: 200,
  }
});
