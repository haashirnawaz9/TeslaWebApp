import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export const Tesla = ( props ) => {
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background}
              source={props.source}>
              <View style={styles.overlay}>
                <Text style={styles.name}>{props.name}</Text>
              </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      background: {
        flex: 1,
        resizeMode: 'cover',
      },
      overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 700,
      },
      name: {
        fontSize: 30,
        fontWeight: 'bold',
        top: 145,
      },
    });
