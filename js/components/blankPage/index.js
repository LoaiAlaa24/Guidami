import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  View,
  Text,
  Button,
  ImageBackground,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import { Image } from "react-native";
import styles from "./styles";
const backgroundImg = require("../../../images/couples-traveling.jpg");

class BlankPage extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
  };

  render() {
    const { props: { name, index, list } } = this;
    console.log(this.props.navigation, "000000000");
    return (
      <Container style={styles.container}>
        {/* <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>{name ? this.props.name : "Blank Page"}</Title>
          </Body>

          <Right />
        </Header> */}

        <Content>
         <Image  source={backgroundImg} style={styles.im}/>
         
          <Text style={styles.tex}>
                  Welcome to Guidami
          </Text>

          <Button onPress={() => this.props.navigation.navigate("Login")} style={styles.btnSignIn} >
          <Text>Sign in</Text>
          </Button>

          <Button onPress={() => this.props.navigation.navigate("Register")} style={styles.btnSignUp} >
          <Text>Sign up</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer())
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list
});

export default connect(mapStateToProps, bindAction)(BlankPage);
