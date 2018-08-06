
const React = require('react-native');
const { StyleSheet , Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
export default{
  im:{
  width:"100%",
  marginLeft:0,
  height:deviceHeight/1.01255555555,
  overflow:"hidden"
  },
  container: {
    backgroundColor: '#FBFAFA',
  },
  v:{

    position:"absolute"

  },
  tex:{
    position:"absolute",
    color:"#ffff",
    alignSelf:"center",
    justifyContent:"center",
    marginTop:deviceHeight/3,
    width:280,
    fontSize:55,
    fontWeight:"bold",
   

  },btnSignUp: {
    position:"absolute",
    zIndex:100,
    marginLeft:200,
    backgroundColor:'#216083',
    borderRadius:10,
    marginTop:deviceHeight/1.5
  },
  btnSignIn: {
    position:"absolute",
    zIndex:100,
    marginLeft: 100,
    backgroundColor:'#216083',
    borderRadius:10,
    marginTop:deviceHeight/1.5
  }
};
