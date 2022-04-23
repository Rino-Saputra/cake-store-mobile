import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width-20,
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 10
    },  
    headText: {
        textAlign: 'center',
        fontFamily: 'Helvetica'
    },
    card: {
        flexDirection: 'row',
        marginVertical: 20,
        marginRight: 5,
        overflow: 'hidden'
    },
    cakeImgCard: {
        width: 150,
        height: 100,
        marginRight: 10,
        borderRadius: 10
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3a3c40',
        marginBottom: 10
    },
    cardIconCnt: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },  
    cardIcon: {
        height: 29,
        width: 29
    },
    rating: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
    },
    overlayCnt: {
        width: '90%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    overlayImg : {
        width: 250,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    closeBtn :{
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 10,
        backgroundColor: '#f55f45',
        color: 'white',
        width: '20%',
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    closeBtnCnt: {
        justifyContent:'center',
        alignItems: 'center'
    },
    errImg: {
        width: 200,
        height: 250
    },
    errCnt: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errMsg: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#f55f45'
    },
    addBtn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        color: 'white',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
        borderRadius: 10,
        backgroundColor: '#6dd459'
    }
})