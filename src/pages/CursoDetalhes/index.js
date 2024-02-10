import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Detalhes() {
    const route = useRoute();
    return (
        <SafeAreaView style={[styles.container]}>

            <Text>Tela de Detalhes do Usuario</Text>

            <Text>
                { route.params?.Curso  ?? "Nome Completo não encontrado"}
            </Text>

            <Text>
            { route.params?.Descrição  ?? "Nome Completo não encontrado"}

            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})