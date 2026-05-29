import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../Services/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Registrar({ navigation }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function cadastrar() {
        
        if(nome === '' || email === '' || senha === '') {
            
            Alert.alert(
                'Erro',
                'Preencha todos os campos'
            );

            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                senha
            );

            const uid = userCredential.user.uid;

            await setDoc(doc(db, "users", uid), {
                nome: nome,
                email: email,
                saldo: 0,
                gastos: 0,

                movimentacoes: [

                    {
                        id: 1,
                        label: 'Salário',
                        value: '2345',
                        date: '01/05/2026',
                        type: 1
                    }
                ]
            });

            Alert.alert(
                'Sucesso',
                'Conta criada com sucesso!'
            );

            navigation.goBack();

        } catch(error) {

            Alert.alert(
                'Erro',
                error.message
            );
        }
    }

    return(
        <View style={styles.container}>

            <Text style={styles.title}>
                Criar Conta
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Nome completo'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Digite sua senha'
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={cadastrar}
            >
                <Text style={styles.buttonText}>
                    Criar conta
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30
    },

    input: {
        backgroundColor: '#f1f5f9',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15
    },

    button: {
        backgroundColor: '#00c6ff',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})