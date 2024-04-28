import { StyleSheet} from 'react-native';

export const PStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0d0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color: 'white',
        fontFamily: 'caveat-regular',
        fontSize: 30,
        textAlign: 'center',
        position: 'relative',
        bottom: 320,
    },
    logo:{
        position: 'relative',
        bottom: 150,
        width: 430,
        objectFit: 'contain',
        shadowColor: '#F8D98F', 
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,  
        shadowRadius: 75, 
    },
    button:{
        position: 'relative',
        alignSelf:'center',
        bottom: 100,
        width: 300,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25252A',
        shadowColor: 'snow', 
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.8,  
        elevation: 20,
        shadowRadius: 20, 
    },
  });
