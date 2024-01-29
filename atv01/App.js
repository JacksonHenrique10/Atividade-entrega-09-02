import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  Platform,
  Pressable,
} from "react-native";
const logo = require("./assets/logo-og.png");

export default function App() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.container}>
      <Image source={logo} style={{marginBottom:30}}></Image>
      <Text style={styles.title}>Nome:</Text>
        <TextInput placeholder="Name" style={styles.TextInputext} />
        <Text style={styles.title}>Senha:</Text>
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={[styles.TextInputext]}
        />
        <Pressable style={styles.button}>
          <Text style={styles.titlebtn}>Entrar</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#222222'
  },
  TextInputext: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    padding:5,
    marginVertical: 3,
    borderColor: "white",
    backgroundColor:'white',
    color:'white',

  },
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex:1,
  },
  title:{
    width:'80%',
    color: '#fff',
  },
  button:{
    width:"80%" ,
    marginTop:20,
    borderColor:'black',
    borderWidth:1,
    height:30,
    borderRadius:10,
    backgroundColor:'#61DAFB',
  },
  titlebtn:{
    color:"#fff",
    fontSize:16,
    textAlign:"center",
  }

});