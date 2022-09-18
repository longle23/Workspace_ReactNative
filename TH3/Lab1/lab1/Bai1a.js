import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/background.png')} style={styles.image}>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require('./img/circle.png')} />
        </View>

        <View style={styles.center}>
          <Text style={styles.text1}>GROW</Text>

          <Text style={styles.text2}>YOUR BUSINESS</Text>

          <Text style={styles.text3}>We will help you to grow your business using</Text>

          <Text style={styles.text4}>online server</Text>
        </View>

        <View style={styles.bottom}>
          <Button style={styles.btn1} title='LOGIN'></Button>

          <Button style={styles.btn2} title='SIGN UP'></Button>
        </View>

        <Text style={{ flex:1, fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>HOW WE WORK?</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
  },
  logo: {
    width: 180,
    height: 180
  },
  top: {
    marginTop: 35,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 30,
  },
  text2: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold'
  },
  text3: {
    fontsize: 25,
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text4: {
    fontsize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  bottom: {
    flex: 1,
    width: '50%',
    height: '7%',
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  btn1: {
    width: 100,
    height: 20,
  },
  btn2: {
    width: 100,
    height: 20
  }
});