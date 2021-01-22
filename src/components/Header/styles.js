import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
 
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 0.199999,
    borderColor: '#c4c4c4',
    // backgroundColor: 'pink',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    justifyContent: 'flex-end',

    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  numView: {
    borderRadius: 150,
    width: 19,
    height: 19,
    padding: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    zIndex: 1,
    position: 'absolute',
    left: 10,
    top: -10,
  },
  num: {
    color: '#fff',
    fontSize: 16,
  },
  menuStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  menuOptions: {
    borderRadius: 100,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '45%',
    elevation: 2,
    marginTop: -10,
    marginLeft: 20,
    paddingHorizontal: 10,
  },
  optionItems: {
    color: 'black',
    paddingVertical: 5,
  },
  menuTriggerStyle: {
    // paddingTop: 15,
    // paddingRight: 15,
    // marginRight: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
