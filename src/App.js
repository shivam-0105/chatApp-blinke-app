import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login/Login'
import Spinner from 'react-spinkit';
import Home from './components/Home/Home';
import Help from './components/Help/Help';
import Network from './components/Network/Network';

function App() {

    const [user , loading] = useAuthState(auth);

    if ( loading ) {
        return (
            <AppLoading>
                <AppLoadingContents>
                    <img src="/images/logo2.png" alt="BlinkeLogo" />
                    <Spinner name="pacman" color="#8c9eff" fadeIn="none" />
                </AppLoadingContents>
            </AppLoading>
        );
    }

    return (
        <div className="app">
            <Router>
                { !user ? (
                        <Login />
                    ) : (
                        <>
                            {/* A switch looks through its children <Route> and renders the first one that matches the current URL */}
                            <Header />
                            <AppBody>
                                <Sidebar />
                                <Switch>
                                    <Route path="/" exact component={Chat} />
                                    <Route path="/home" exact component={Home} />
                                    <Route path="/help" exact component={Help} />
                                    <Route path="/network" exact component={Network} />
                                </Switch>
                            </AppBody>
                        </>
                ) }
            </Router>
        </div>
    );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const AppLoading = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    background-color: var(--blinke-color);
`;

const AppLoadingContents = styled.div`
    text-align: center;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        height: 250px;
        padding: 20px;
        margin-bottom: 30px;
    }

    > .sk-pacman > div {
        height: 140px;
        width: 140px;
    }
`;