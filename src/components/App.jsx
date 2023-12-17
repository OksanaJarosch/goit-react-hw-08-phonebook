import { GlobalStyle } from "GlobalStyle";
import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

import HomePage from "pages/HomePage";
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/LoginPage";
import MyPhonebookPage from "pages/MyPhonebookPage";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "redux/authorization/authSelectors";
import { refresh } from "redux/authorization/authOperations";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";



export const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])


  return isRefreshing ? <p>LOADING...</p> : (
    <>
    <Suspense fallback={<p>LOADING...</p>}>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={<HomePage/>}/>
            <Route path="register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />} />
            <Route path="login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />

            <Route path="contacts" element={<PrivateRoute component={<MyPhonebookPage/>} redirectTo = "/login"/>}/>

        </Route>
      </Routes>
    </Suspense>

      <Toaster position="top-right"/>
      <GlobalStyle />
      
    </>
  )
};