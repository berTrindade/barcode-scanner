import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden'
  },
  txtStyle: {
    fontSize: 18,
    color: 'black'
  },
  btn: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 30
  }
})
