import { GlobalStyle } from "GlobalStyle";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";


export const App = () => {


  return (
    <>
    <Suspense fallback={<p>LOADING...</p>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* TODO: <Route/> for Outlet */}

        </Route>
      </Routes>
    </Suspense>

      <Toaster position="top-right"/>
      <GlobalStyle />
    </> 
  )
};