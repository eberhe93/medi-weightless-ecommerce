
import React from "react";
import { Route, Switch } from "react-router-dom";
import ListViewScreen from '../screens/ListViewScreen/ListViewScreen';
import CartCheckoutPage from '../screens/CartPage/CartCheckoutPage';
import ProductDetailScreen from '../screens/ProductDetailScreen/ProductDetailScreen'

export default (
  <Switch>
    <Route exact path="/" component={ListViewScreen} />
    <Route path="/checkout" component={CartCheckoutPage} />
    <Route path="/detail/:productId" component={ProductDetailScreen} />
  </Switch>
)