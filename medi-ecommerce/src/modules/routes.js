
import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import ListViewScreen from '../screens/ListViewScreen/ListViewScreen';
import CartCheckoutPage from '../screens/CartPage/CartCheckoutPage';

export default (
  <Switch>
    <Route exact path="/" component={ListViewScreen} />
    <Route path="/checkout" component={CartCheckoutPage} />
  </Switch>
)