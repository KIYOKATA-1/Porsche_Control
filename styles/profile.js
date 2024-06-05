import { StyleSheet} from 'react-native';

export const PrStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0d0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    switchC:{
        position: 'relative',
        top: 150,
        alignSelf: 'center',
        alignItems: 'center',
    }
    ,
    switchTextLight:{
        position: 'relative',
        color: 'black',
        fontSize: 16,
        top: 20,
        fontFamily: 'outfit-regular',
        textAlign: 'center',
        alignSelf: 'center',
    },
    switchTextDark:{
        position: 'relative',
        color: 'white',
        fontSize: 16,
        top: 20,
        fontFamily: 'coda-regular',
        textAlign: 'center',
        alignSelf: 'center',
    },
    containerLight:{
        flex: 1,
        backgroundColor: '#9b9ba8',
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    textC:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 75,
    },
    welcome:{
        color: 'white',
        fontSize: 30,
        fontFamily: 'coda-bold',
        margin: 10,
        textTransform: 'uppercase',
    },
    welcomeLight:{
        color: 'black',
        fontSize: 30,
        fontFamily: 'coda-bold',
        margin: 10,
        textTransform: 'uppercase',
    }
    ,
    username:{
        color: 'white',
        fontSize: 25,
        fontFamily: 'outfit-bold',
        textTransform: 'uppercase',
        margin: 10,
    },
    usernameLight:{
        color: 'black',
        fontSize: 25,
        fontFamily: 'outfit-bold',
        textTransform: 'uppercase',
        margin: 10,
    }
    ,
    car:{
        height: 270,
        objectFit: 'contain',
        shadowColor: "#FFFF",     
        shadowOffset: { width: 2, height: -50}, 
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        shadowOpacity: 0.4,   
        shadowRadius: 50,   
    },
    carLight:{
        height: 270,
        objectFit: 'contain',
        shadowColor: "black",     
        shadowOffset: { width: 2, height: -50}, 
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        shadowOpacity: 0.4,   
        shadowRadius: 50,  
    }
    ,
    carC:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 200,
    },
    carCLight:{

    },
    infoC:{
        position: 'relative',
    },
    dataCon:{
        position: 'relative',
        flexDirection: 'row',
        display: 'flex',
        top: 100,
        alignItems: 'center',
    }
    ,
    millageC:{
        width: 150,
        height: 20,
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row',
        right: 70,
    },
    millage:{
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 25,
    },
    tank: {
        position: 'relative',
        width: 75,
        height: 75,
        left: 30,
        top: 5,
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    tankData:{
        color: 'white',
        fontFamily: 'coda-regular',
        fontSize: 20,
        position: 'relative',
    },
    tankDataLight:{
        color: 'black',
        fontFamily: 'coda-regular',
        fontSize: 20,
        position: 'relative',
    },
  });
