import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from '../style/style'
import { err } from '../export/image'

export default function Error() {
  return (
    <View style={styles.errCnt}>
        <Image source={err} style={styles.errImg} />
        <Text style={styles.errMsg}>Ooops something wnt wrong</Text>
    </View>
  )
}
