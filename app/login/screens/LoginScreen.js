import React, { memo,  } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
//import { emailValidator, passwordValidator } from '../core/utils';
import { getCurrentProfessor } from '../../services/ProfessorService';
import { Actions } from 'react-native-router-flux';

class LoginScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser : null,
      password : { value: '', error: '' },
      email : { value: '', error: '' },
    }
  }

  _onLoginPressed = () => {
      
    const email = this.state.email.value;
    const password = this.state.password.value;
    //const emailError = emailValidator(email.value);
    //const passwordError = passwordValidator(password.value);

    /*    
      if (emailError || passwordError) {
        setEmail({ ...email, error: emailError });
        setPassword({ ...password, error: passwordError });
        return;
      }
    */

    getCurrentProfessor(email, password)
    .then(response => {
      this.setState({
         currentUser : response, 
      })
      Actions.home({currentUser : this.state.currentUser })
    })
    .catch(error => {
      alert(error)
      return ;
    })
  };

  render(){
    return(
      <Background>

        <Logo />        

        <Header>Bienvenue</Header>

        <TextInput
          label="Email"
          returnKeyType="next"
          value={this.state.email.value}
          onChangeText={text => this.setState( {email : {value: text, error: '' }})}
          error={!!this.state.email.error}
          errorText={this.state.email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          label="mot de passe"
          returnKeyType="done"
          value={this.state.password.value}
          onChangeText={text => this.setState( {password : {value: text, error: '' }})}
          error={!!this.state.password.error}
          errorText={this.state.password.error}
          secureTextEntry
        />

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
            <Text style={styles.label}>Mot de passe oublié?</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" onPress={this._onLoginPressed}>
          Se Connecter  
        </Button>

      </Background>
    ); 
  }
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);

//<BackButton goBack={() => navigation.navigate('home')} />