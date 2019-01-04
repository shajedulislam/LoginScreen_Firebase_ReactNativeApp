import React, { Component } from 'react';
import { Text } from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    
    state = { email: '',  pass: '', error: '', loading: false};

    onButtonPress() {

        const { email, pass } = this.state;

        this.setState({ error: '', loading:true });

        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(this.onLoginSucess.bind(this))
        .catch( () => {
            firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(this.onLoginSucess.bind(this))
            .catch(this.onLoginFailed.bind(this));

        });
    }

    onLoginFailed() {
        
                this.setState( { error: 'Authentication Failed.', loading: false });
                
            
    
    }

    onLoginSucess() {
        this.setState(
            {
                email: '',
                pass: '',
                loading: false,
                error: ''
            }
        );
    }
    
    renderButton() {
        if(this.state.loading)
        {
            return <Spinner size="small"/>
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>

        );
    }

    render() {
        
        return (
            <Card>
                <CardSection>
                    <Input
                    secureTextEntry = {false}
                    placeholder="xyz@example.com"
                    label = "Email"
                    value = {this.state.email}
                    onChangeText={text => this.setState({ email : text })}
                     />
                </CardSection>

                <CardSection>
                    <Input
                    secureTextEntry= {true}
                    placeholder="password"
                    label = "Password"
                    value = {this.state.pass}
                    onChangeText={text => this.setState({ pass : text })}
                    /> 
                </CardSection>
                   
                <Text style = {styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}

                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;