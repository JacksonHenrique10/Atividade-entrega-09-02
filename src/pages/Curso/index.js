import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, SafeAreaView, Button } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Curso() {
    const navigation = useNavigation();

    function navegaDetalhes() {
        navigation.navigate('CursoDetalhes', {
            Curso: 'Curso de Desenvolvimento Web',
            Descrição: 'Aprenda os fundamentos do desenvolvimento web, incluindo HTML, CSS e JavaScript. Este curso aborda desde conceitos básicos até técnicas avançadas de design e programação web.'
        });
    }

    return (
        <SafeAreaView style={styles.container} >

            <Text style={{ fontSize: 40, fontWeight: 'bold', }}> Cursos</Text>
            <Text style={styles.paragraph}  />

            



            <Text >
                <Text style={styles.bold} onPress={navegaDetalhes}> 1 - Curso de Desenvolvimento Web </Text>
                <Text style={styles.paragraph}> </Text>
            </Text>
            {/* <Button onPress={navegaDetalhes} title="click"/> */}


            <Text style={styles.paragraph} />

            {/* <Text >
                <Text style={styles.bold}> 2 -  Curso de Marketing Digital: </Text>
                <Text style={styles.paragraph}> </Text>
            </Text>
            <Text>
                Descrição: Explore estratégias de marketing digital, incluindo SEO, mídias sociais, publicidade online e análise de dados. Este curso oferece uma visão abrangente das principais práticas e ferramentas de marketing digital utilizadas atualmente.
            </Text>

            <Text style={styles.paragraph} />
            <Text >
                <Text style={styles.bold}> 3 -  Curso de Fotografia: </Text>
                <Text style={styles.paragraph}> </Text>
            </Text>
            <Text>
                Descrição: Aprenda os princípios da fotografia, incluindo composição, iluminação e edição de imagens. Este curso aborda desde os fundamentos da câmera até técnicas avançadas de fotografia, permitindo que você capture e edite fotos incríveis.            </Text> */}
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
        fontSize: 20,
    },

});