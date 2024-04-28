import { StyleSheet} from 'react-native';

export const CStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0d0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    name:{
        position: 'relative',
        color: 'white',
        fontSize: 32,
        fontFamily: 'coda-regular',
        bottom: 225,
        width: 154,
        height: 38,
        textAlign: 'center',
    },
    temperature:{
        position: 'relative',
        color: 'white',
        fontSize: 70,
        textAlign: 'center',
        width: 250,
        height: 85,
        bottom: 100,
        fontFamily: 'coda-regular',
    },
    slider:{
        position: 'relative',
        width: 300,
        height: 5,
        top: 50,
    },
    btnC:{
        width:60,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
        padding: 10,
    },
    buttonGroup:{
        position: 'relative',
        flexDirection: 'row',
        top: 100,
        justifyContent: 'space-between',
    },
    icon:{
        color: 'white'
    },
    iconActive:{
        color: 'black'
    },
    buttonText:{
        fontSize: 16,
        color: 'white',
        fontFamily: 'coda-regular',
        textAlign: 'center',
        top: 15,
        textTransform: 'uppercase'
    },
    buttonContainer: {
        alignItems: 'center'
    }
    ,
    btnActive:{
        width: 60,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
        padding: 10,
        shadowColor: '#FFF',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 25,
    }
  });
