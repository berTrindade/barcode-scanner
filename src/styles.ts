import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
      _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    _heading:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30
    },
    _txtStyle:{
        fontSize: 18,
        color: 'black'
    },
    _btn:{
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 30
    },
  })
  