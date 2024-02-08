import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, SafeAreaView } from "react-native";



export default function Curso() {
    const navigation = useNavigation();
    return (
        <SafeAreaView >
            <Text>
                Curso
            </Text>
        </SafeAreaView>
    )
}