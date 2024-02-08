import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, SafeAreaView } from "react-native";



export default function Contato() {
    const navigation = useNavigation();
    return (
        <SafeAreaView >
            <Text>
             Contato
            </Text>
        </SafeAreaView>
    )
}