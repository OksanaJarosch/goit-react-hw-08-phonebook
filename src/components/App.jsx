import { GlobalStyle } from "GlobalStyle";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

import HomePage from "pages/HomePage";
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/LoginPage";
import MyPhonebookPage from "pages/MyPhonebookPage";


export const App = () => {


  return (
    <>
    <Suspense fallback={<p>LOADING...</p>}>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={<HomePage/>}/>
          <Route path="register" element={<RegistrationPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="contacts" element={<MyPhonebookPage/>}/>

        </Route>
      </Routes>
    </Suspense>

      <Toaster position="top-right"/>
      <GlobalStyle />
    </> 
  )
};