
const React = require('react-native');


const { StyleSheet , Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
export default {
  im:{
    
    width:"100%",
    marginLeft:0,
    height:deviceHeight,
    position: "relative",
    overflow:"hidden",


    },
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 18,
  },
  btnBookTrip: {
    justifyContent: 'center',
    alignSelf:'center',
    position:"absolute",
    width:"50%",
    zIndex:100,
    marginLeft: 100,
    backgroundColor:'#FF851B',
    borderRadius:10,
    marginTop:deviceHeight/1.5
  }
};
