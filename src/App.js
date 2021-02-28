import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Spinner from "react-spinkit";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
