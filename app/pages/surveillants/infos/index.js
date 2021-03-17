import React, { Component } from 'react';
import { Card, CardItem, Text, Left, } from 'native-base';
import { getProfessorById } from '../../../services/ProfessorService';
import { AppLoading } from 'expo';
import Background from '../../../components/Background';
import Avatar from "../../../components/Avatar"
import { theme } from '../../../core/theme';
import Button from "../../../components/Button";

export default class Infos extends Component {

  constructor(props){
    super(props)
    this.state={
      loading : true,
      data : null,
    }
  }
  async componentDidMount() {
    getProfessorById(1)
    .then(response => {
      this.setState({
        data : response,
        loading : false,
      })
    })
  }

  render() {
    if(this.state.loading){
      return(
        <AppLoading />
      );
    }
    const data = this.state.data;
    return (
      <Background>
  
      <Card style={{width:"100%", }}>
            <CardItem>
              <Left>
                <Avatar />
              </Left>
            </CardItem>

            <CardItem header>                        
                <Text>Nom : {data.nom} </Text>
            </CardItem>
            <CardItem header>                        
                <Text>Prénom : {data.prenom} </Text>
            </CardItem>
            <CardItem header>                        
                <Text>Mobile : {data.contact.phoneNumber} </Text>
            </CardItem>
            <CardItem header>                        
                <Text>Email : {data.contact.email} </Text>
            </CardItem>
            <CardItem header>                        
                <Text>Email : {data.contact.adresse} </Text>
            </CardItem>

            <CardItem>
              <Button 
                mode="contained" onPress={()=>{alert('ok')}} 
                style={{backgroundColor:theme.colors.secondary}} 
              >
                calendrier des examens 
              </Button>
                
            </CardItem>
          </Card>
      </Background>
    );  
  }
}