import { StyleSheet} from 'react-native';

export const CStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0d0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerLight:{
        flex: 1,
        backgroundColor: '#9b9ba8',
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    nameLight:{
        position: 'relative',
        color: '#63519F',
        fontSize: 32,
        fontFamily: 'coda-regular',
        bottom: 225,
        width: 154,
        height: 38,
        textAlign: 'center',
    }
    ,
    name:{
        position: 'relative',
        color: '#CDBDFA',
        fontSize: 32,
        fontFamily: 'coda-regular',
        bottom: 225,
        width: 154,
        height: 38,
        textAlign: 'center',
    },
    temperature:{
        position: 'relative',
        color: '#CDBDFA',
        fontSize: 70,
        textAlign: 'center',
        width: 250,
        height: 85,
        bottom: 100,
        fontFamily: 'coda-regular',
    },
    temperatureLight:{
        position: 'relative',
        color: '#63519F',
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
        backgroundColor: '#63519F',
        borderWidth: 0.5,
        borderColor: '#CDBDFA',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
        padding: 10,
    },
    btnCLight:{
        width:60,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#FBFAFE',
        borderWidth: 2,
        borderColor: '#63519F',
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
        color: '#FBFAFE'
    },
    iconLight:{
        color: '#63519F'
    },
    iconActive:{
        color: '#63519F'
    },
    iconActiveLight:{
        color: '#FBFAFE'
    },
    buttonText:{
        fontSize: 16,
        color: '#CDBDFA',
        fontFamily: 'coda-regular',
        textAlign: 'center',
        top: 15,
        textTransform: 'uppercase'
    },
    buttonTextLight:{
        fontSize: 16,
        color: '#63519F',
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
        backgroundColor: '#CDBDFA',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
        padding: 10,
        shadowColor: '#CDBDFA',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 25,
    },
    btnActiveLight:{
        width: 60,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#63519F',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
        padding: 10,
        shadowColor: '#63519F',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 20,
    }
  });
