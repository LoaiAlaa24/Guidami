
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#216083',
    justifyContent : 'center'
  },
  shadow: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  header:{

width:400,
height:400,
// resizeMode:"contain",
alignSelf:"center"
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
    backgroundColor:"#FF851B"
  },
  in:{
width:200,
height:50,
backgroundColor:"#ffff",
borderRadius:10,
paddingLeft: 10,
marginLeft:75,
marginBottom:30


  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor:"#FF851B"
  },
};
