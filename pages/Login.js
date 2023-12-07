import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Register } from './Register';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = ({ navigation }) => {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser == signin) {
        navigation.navigate("Tesla Home Page");
        console.log(authUser);
      }
    })
    return unsubscribe;
  
  });

  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user)
      navigation.replace("Tesla Home Page")
    })
    .catch((error) => {
      alert("Login failed: " + error)
    });
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
    <Image style={styles.logo} source={require('./tesla.png')}/>

      <Input style={styles.input} 
            placeholder="Email" 
            focusable
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
      <Input style={styles.input} 
            placeholder="Password" 
            secureTextEntry 
            type='password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
      <Button style={styles.button} 
              title="LOG IN" 
              buttonStyle={{ backgroundColor: 'black' }}
              onPress={signin}
              />
      <Button style={styles.button} 
              title="REGISTER" 
              type="outline" 
              buttonStyle={{ borderColor: 'black' }}
              titleStyle={{ color: 'black' }}
              onPress={()=> navigation.navigate(Register)}
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
    width: 300,
  }, 
  button: {
    width: 200,
    borderRadius: 10,
    opacity: 10,
    padding: 5,
    paddingTop: 15,
    color: 'black',
  },
  input: {
    width: 200,
  }
});
