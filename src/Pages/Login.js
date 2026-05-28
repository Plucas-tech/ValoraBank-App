import { Text, TextInput, TouchableOpacity, View, StyleSheet, Alert, StatusBar } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Services/firebaseConfig';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function entrar() {

        if(email === '' || senha === '') {
            Alert.alert(
                'Erro',
                'Preencha todos os campos'
            );

            return;
        }

        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                senha
            );

            console.log(user);

            navigation.replace('Home');
        } catch(error) {
            Alert.alert(
                'Erro',
                'Email ou senha inválidos'
            );
        }
        
    }

    return (

        <LinearGradient 
          colors={['#00c6ff', '#0072ff']} 
          style={styles.container}
        >

        <View style={styles.LogoArea}>

            <View style={styles.LogoCircle}>
                <AntDesign
                  name='bank'
                  size={42}
                  color="#fff"
                />
            </View>

            <Text style={styles.logo}>
                Valora Bank
            </Text>

            <Text style={styles.subtitle}>
                Segurança e praticidade para você
            </Text>

        </View>

        <View style={styles.card}>
            
            <Text style={styles.title}>
                Entrar na conta
            </Text>

            <View style={styles.inputArea}>

                <AntDesign
                  name='mail'
                  size={20}
                  color="#999"
                />

                <TextInput
                  style={styles.input}
                  placeholder="Digite seu email"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={setEmail}
                />

            </View>

            <View style={styles.inputArea}>

          <AntDesign
            name="lock"
            size={20}
            color="#999"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={entrar}
        >
          <Text style={styles.buttonText}>
            Acessar conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>
                Esqueci minha senha
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Registrar')}>
            <Text style={styles.link}>
                Criar conta
            </Text>
        </TouchableOpacity>

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

    container:{
      flex: 1,
      justifyContent: 'center',
      padding: 24
    },

    LogoArea: {
        alignItems: 'center',
        marginBottom: 40
    },

    LogoCircle: {
        width: 90,
        height: 90,
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },

    subtitle: {
        color: '#f1f5f9',
        marginTop: 8,
        fontSize: 15
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 22, 
        padding: 24,
        elevation: 10
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#111'
    },

    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f5f9',
        borderRadius: 14,
        paddingHorizontal: 14,
        marginBottom: 16
    },

    input: {
        flex: 1,
        height: 55,
        marginLeft: 10,
        color: '#000'
    },

    button: {
        backgroundColor: '#00c6ff',
        height: 55,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    forgot: {
        textAlign: 'center',
        color: '#00c6ff',
        marginTop: 20,
        fontWeight: 'bold',
    },

    link: {
        color:'#00c6ff',
        textAlign:'center',
        marginTop:20,
        fontWeight:'bold'
    },

});