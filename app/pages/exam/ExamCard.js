import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text,  } from "native-base";
import { Actions } from 'react-native-router-flux';
import {  getExamById } from "../../services/ExamService";
import Button from "../../components/Button";
import {theme} from "../../core/theme";

export default class ExamCard extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data : null,
            isLoading : true,
        }
    }

    componentDidMount(){
        getExamById(this.props.id)
        .then(response =>{
            this.setState({
                data : response,
                isLoading : false,
            })
        })
        .catch(error =>{
            alert(error)
        })
    }

    goToParticipants = (id) => {
        Actions.participants({id:id})
    }

    goToScanner = (id) => {
        Actions.scanner({id:id})
    }

    render() {
        //alert(this.props.id)
        if(this.state.data){
            return (
                <Container>
                    <Content>
                        <Card>
                            <CardItem header>                        
                                <Text>Exam N° : {this.state.data.id} </Text>
                            </CardItem>
                            
                            <CardItem>                        
                                <Text>
                                    Date : {this.state.data.date}
                                </Text>
                            </CardItem>
                            <CardItem>                        
                                <Text>
                                    Module : {this.state.data.module.label}
                                </Text>
                            </CardItem>
                            <CardItem>                        
                                <Text>
                                    Salle : {this.state.data.room.numero}
                                </Text>
                            </CardItem>
                            <CardItem>                        
                                <Text>
                                    Session : {this.state.data.session}
                                </Text>
                            </CardItem>
                            <CardItem   >
                                <Button
                                    onPress={() => this.goToScanner(this.state.data.id)}
                                    mode="contained"
                                    style={{ backgroundColor : theme.colors.secondary}}
                                >
                                    Commencer le scan
                                </Button>
                            </CardItem>
                            <CardItem  >
                                <Button 
                                    onPress={() => this.goToParticipants(this.state.data.id)}
                                    mode="contained"
                                >
                                    Liste des participants
                                </Button>
                                
                            </CardItem>
                       </Card>
                    </Content>
                </Container>
            );
        }
        else{
            return(<Text>Chargement...</Text>) 
        }
    }
}
