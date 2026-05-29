import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'

import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../Services/firebaseConfig'

export default function ForgotPassword() {
    
    const [ email, setEmail] = useState('');

    async function recuperarsenha() {
        
        if(email === '') {
            Alert.alert(
                'Erro',
                'Digite seu email'
            );

            return;
        }

        try {

            await sendPasswordResetEmail(
                auth,
                email
            );

            Alert.alert(
                'Sucesso',
                'Link de recuperação enviado!'
            );

        } catch(error) {

            Alert.alert(
                'Erro',
                'Não foi possivel enviar'
            );
        }
    }

    return(

        <View style={styles.container}>

            <Text style={styles.title}>
                Recuperar senha
            </Text>

            <Text style={styles.subtitle}>
                Digite sei email para recuperar sua conta
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity 
            style={styles.button} 
            onPress={recuperarsenha}>

                <Text style={styles.buttonText}>
                    Enviar
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
        marginBottom: 10
    },

    subtitle: {
        color: '#64748b',
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