import React, { Component } from 'react';
import { View } from 'react-native';

import firebase from '@firebase/app'
import '@firebase/auth'

import { Header, Spinner, Button, Card, CardSection } from './components/common';

import LoginForm from './components/LoginForm';



class App extends Component {

    state = { loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyC1GpZxfZ4d7tIDLNfgDFpQac1FWeBGs1A',
                authDomain: 'auth-ubedev.firebaseapp.com',
                databaseURL: 'https://auth-ubedev.firebaseio.com',
                projectId: 'auth-ubedev',
                storageBucket: 'auth-ubedev.appspot.com',
                messagingSenderId: '1078057802881'
            });

            firebase.auth().onAuthStateChanged((user) => {
                if(user)
                {
                    this.setState({ loggedIn: true });
                }
                else
                {
                    this.setState({ loggedIn: false});
                }


            });


            
    }

    renderContent() {

        switch (this.state.loggedIn){
            case true:
                return (
                    <Card>
                    <CardSection>
                    <Button onPress={() => firebase.auth().signOut()} >
                     Log out
                    </Button>
                    </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>;
            default:
                return (
                    <Card>
                    <CardSection>
                        <Spinner/>
                    </CardSection>
                    </Card>
                );
            
        }
        
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                
                {this.renderContent()}
                
            </View>

        );
    }
}

const styles = {
    logoutstyle: {
        paddingTop: 70,
        paddingBottom: 70
    }
}

export default App;