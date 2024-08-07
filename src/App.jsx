import { useEffect } from "react";
import { useDispatch } from "react-redux";
import isPropValid from "@emotion/is-prop-valid"
import { StyleSheetManager } from "styled-components"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/home/home.component"
import Navigation from "./routes/navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component"
import Shop from "./routes/shop/shop.component"
import Checkout from "./routes/checkout/checkout.component"
import { checkUserSession } from "./store/user/user.action"

const shouldForwardProp = (propName, target) => {
  if (typeof target === "string") {
    return isPropValid(propName);
  }
  return true;
}

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </StyleSheetManager>
  )
}

export default App
