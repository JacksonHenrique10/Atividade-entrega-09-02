import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button, Alert, StyleSheet, SafeAreaView } from "react-native";

export default function Contato() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviarMensagem = () => {
        if (nome === '' || email === '' || mensagem === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        } else {
            Alert.alert('Sucesso', 'Mensagem enviada para Escola Senai com sucesso!');
            
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Contato</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Mensagem"
                value={mensagem}
                onChangeText={setMensagem}
                multiline
                numberOfLines={4}
            />
            <Button title="Enviar" onPress={enviarMensagem} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top', 
    },
});
