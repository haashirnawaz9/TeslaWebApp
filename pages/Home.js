import { StyleSheet, Text, ScrollView } from 'react-native';
import { Tesla } from './Tesla';

export const Home = ( props ) => {
    return(
        <ScrollView style={styles.container}>
            <Tesla name="Model 3" source={require('./images/model-3.jpg')}/>
            <Tesla name="Model Y" source={require('./images/model-y.jpg')}/>
            <Tesla name="Model X" source={require('./images/model-x.jpg')}/>
            <Tesla name="Model S" source={require('./images/model-s.jpg')}/>
            <Tesla name="Accessories" source={require('./images/accessories.jpg')}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
    },
})

