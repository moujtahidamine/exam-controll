import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Background from '../../../components/Background';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Logo from "../../../components/Logo";
import {theme} from "../../../core/theme";

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            //...
        }
    }

    componentDidMount(){
        //...
    }

    goToExams(){
        Actions.exams({idProf : this.props.currentUser.id})
    }

    goToInfos(){
        Actions.infos({currentUser : this.props.currentUser})
    }

    render(){
        const currentUser = this.props.currentUser;

        return(
        <Background >
            
            <Logo />
            
            <Header >Bienvenue M. {currentUser.nom} </Header>
            
            <Button 
                mode="contained" 
                onPress={()=>this.goToInfos(currentUser)} 
                style={styles.button1} 
            >
                Compte 
            </Button>    
            
            <Button 
                mode="contained" onPress={()=>this.goToExams(currentUser.id)} 
                style={styles.button2} 
            >

                Examens 
            </Button>    
        </Background >
        );
    }
}

const styles = StyleSheet.create({
  center : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },  
  button1 : {
    backgroundColor: theme.colors.primary,
    height : 60,
    paddingTop : 5
  },
  button2 : {
    backgroundColor: theme.colors.secondary,
    height : 60,
    paddingTop : 5
  },
  icon:{
      color : '#fff',
  }
 
});

/*
    <Button rounded block onPress={()=>this.goToInfos(currentUser)} style={styles.row}>
        <Icon name='person' />
        <Text>Informations personnelles</Text>
    </Button>

    <Button rounded block success onPress={()=>this.goToExams(currentUser.id)} style={styles.row}>
        <Icon name='bookmarks' />
        <Text>Calendrier des examens</Text>
    </Button>
*/