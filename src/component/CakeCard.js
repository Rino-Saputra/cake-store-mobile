import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'

import axios from 'axios';
import { Overlay } from 'react-native-elements'

import { styles } from '../style/style';
import { add, star, del } from '../export/image';

export default function CakeCard( props ){

    const { data, reload } = props;

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => setVisible(!visible);

    const [message, setMessage] = useState('');
    const [visibleMessage, setVisibleMEssage ] = useState(false)

    const toogleMessage = () => {
        setVisibleMEssage(!visibleMessage);
        reload();
    }

    const addData = () => {
        axios.post("https://611a268fcbf1b30017eb5527.mockapi.io/cakes",'')
        .then(res=> setMessage('sucess add cake'))
        .catch(err=> setMessage('failed add cake'))
    }

    const delData = () => {
        axios.delete(`https://611a268fcbf1b30017eb5527.mockapi.io/cakes/${data.id}`)
          .then( () => setMessage('sucess delete item'))
          .catch( () => setMessage('failed to delet'));
      }

    return(
        <View style={styles.card}>
            <View>
                <TouchableOpacity onPress={toggleOverlay}>
                    <Image source={data.image} style={styles.cakeImgCard} />
                </TouchableOpacity>
            </View>
            <View style={{minWidth: '50%'}}>
                <Text style={styles.cardTitle}>
                    {data.title.length > 14 ? data.title.slice(0,14)+'...' : data.title}
                </Text>
                <Text style={{fontWeight:'bold', color: '#5a5b5e'}}>
                    {data.description.length > 16 ? data.description.slice(0,16)+'...' : data.description}
                </Text>
                <View style={styles.cardIconCnt}>
                    <View style={styles.rating}>
                        <Image source={star} style={styles.cardIcon} />
                        <Text>{data.rating}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{ toogleMessage(); addData(); }}>
                        <Image source={add} style={[styles.cardIcon, {marginRight: 10}]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{ toogleMessage(); delData(); }}>
                        <Image source={del} style={styles.cardIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={styles.overlayCnt}>
                    <Image source={data.image} style={styles.overlayImg} />
                    <Text style={styles.cardTitle}> {data.title} </Text>
                    <Text style={{fontWeight:'bold', color: '#5a5b5e'}}> {data.description} </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={toggleOverlay} style={styles.closeBtnCnt}>
                        <Text style={styles.closeBtn}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>

            <Overlay isVisible={visibleMessage} onBackdropPress={toogleMessage}>
                <Text style={styles.cardTitle}> {message} </Text>
                <View>
                    <TouchableOpacity onPress={toogleMessage} style={styles.closeBtnCnt}>
                        <Text style={[styles.closeBtn,{width: 80}]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>

        </View>
    )
}