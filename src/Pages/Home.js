import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../Services/firebaseConfig';

export default function Home() {

    const [nome, setNome] = useState('');
    const [saldo, setSaldo] = useState('');
    const [gastos, setGastos] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {

        async function carregarDados() {

            const uid = auth.currentUser.uid;

            const docRef = doc(db, "users", uid);

            const snapshot = await getDoc(docRef);

            if(snapshot.exists()) {
                const data = snapshot.data();

                setNome(data.nome);
                setSaldo(data.saldo);
                setGastos(data.gastos);
                setList(data.movimentacoes);

            }
        }

        carregarDados();
    }, []);

    return(

        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    }
})