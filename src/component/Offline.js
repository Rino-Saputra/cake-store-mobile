import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../style/style'

import { offline } from '../export/image';

export default function Offline() {
  return (
    <View style={styles.errCnt}>
        <Image source={offline} style={styles.errImg} />
        <Text style={styles.errMsg}>Ooops you are offline</Text>
    </View>
  )
}
