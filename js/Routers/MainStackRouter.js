import React, { Component } from "react";
import Login from "../components/login/";
import Home from "../components/home/";
import BlankPage from "../components/blankPage";
import BlankPage2 from "../components/blankPage2";
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  BlankPage: { screen: BlankPage },
  Login: { screen: Login },
  Home: { screen: Home },
  BlankPage2: { screen: BlankPage2 },
  
}));
