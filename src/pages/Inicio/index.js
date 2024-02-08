import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, SafeAreaView, Image } from "react-native";



export default function Inicio() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container} >

            <Image source={require('../Inicio/senai.png')} style={{ width: 390, height: 100,  alignItems: 'center' }} />

            <Text style={styles.paragraph} />

            <Text>
                Nome do aluno: <Text style={styles.bold}> Jackson Santos </Text>
            </Text>
            <Text style={styles.paragraph} />
            <Text>
                Data atual com nome da cidade: <Text style={styles.bold}>Sumaré, 30 /01 / 2024 </Text>
            </Text>
            <Text style={styles.paragraph} />
            <Text>
                Nome da escola: <Text style={styles.bold}>Escola SENAI Celso Charuri</Text>
            </Text>
            <Text style={styles.paragraph} />
            <Text>
                Nome do Curso: <Text style={styles.bold}>Técnico em Desenvolvimento de Sistemas</Text>
            </Text>
            <Text style={styles.paragraph} />
            <Text>
                Nome da Unidade Curricular: <Text style={styles.bold}> INDMO - Interface para Dispositivos Móveis</Text>
            </Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'center',
        margin: 25,

    },
    bold: {
        fontWeight: 'bold',
    },

});