import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native'

import axios from 'axios';
import {useNetInfo} from "@react-native-community/netinfo";

import { CakeCard, Empty, Error, Offline } from '../export/Component'
import { styles } from '../style/style';

export default function CakeStore(){

    const [cakeList, setCakeList ] = useState([]);
    const [ error, setError ] = useState(false);

    const netInfo = useNetInfo();

    const getData = () => {
        axios.get("https://611a268fcbf1b30017eb5527.mockapi.io/cakes")
        .then(res=> setCakeList(res.data.data.items))
        .catch(err=> setError(true))
    }

    useEffect(()=> getData(),[]);

    return(
        <View style={styles.container}>
        {   !netInfo.isConnected ?<Offline /> : 
            error ? <Error />:
            <View>
                <View style={styles.headText}>
                    <Text style={{fontSize: '2rem', fontWeight: 'bold'}}>Cake Store</Text>
                    <Text style={{fontSize: '1rem', fontWeight: 'bold'}}>List Cake</Text>
                </View>
                <ScrollView>
                    {   !cakeList.length ? <Empty reload={getData} /> :
                        cakeList.map( data => <CakeCard 
                            key={data.id}
                            data={data}
                            reload={getData}
                        /> )
                    }
                </ScrollView>
            </View>
        }
        </View>
    )
}