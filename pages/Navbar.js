import { StyleSheet, Text, ScrollView } from 'react-native';
import { Tesla } from './Tesla';

export const Navbar = () => {
    return(
      <ScrollView style={styles.container}>
          <Tesla name="Solar Panel" source={require('./images/solar-panel.jpg')}/>
          <Tesla name="Solar Roof" source={require('./images/solar-roof.jpg')}/>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
    },
  });