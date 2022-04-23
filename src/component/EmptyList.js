import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../style/style'
import { empty } from '../export/image';
import axios from 'axios';

export default function Empty( { reload } ) {

    const addData = () => {
        axios.post("https://611a268fcbf1b30017eb5527.mockapi.io/cakes",'')
        reload();
    }

    return (
        <View style={[styles.errCnt,{marginTop: 50}]}>
            <Image source={empty} style={styles.errImg} />
            <Text style={styles.errMsg}>List is Empty</Text>
            <TouchableOpacity onPress={addData}>
                <Text style={styles.addBtn}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}
