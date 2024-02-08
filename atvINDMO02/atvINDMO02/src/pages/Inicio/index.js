import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, SafeAreaView, Image } from "react-native";



export default function Inicio() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container} >

            {/* <Image source={require('./assets/logo-senai.png')}></Image> */}

            <Text>Nome do aluno: Jackson Santos</Text>
            <Text>Data atual com nome da cidade: (Sumaré, 30 /01 / 2024)</Text>
            <Text> Nome da escola: (Escola SENAI Celso Charuri) </Text>
            <Text>Nome do Curso: (Técnico em Desenvolvimento de Sistemas) </Text>
            <Text>Nome da Unidade Curricular: (INDMO - Interface para Dispositivos Móveis) </Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:25,
    },

});


