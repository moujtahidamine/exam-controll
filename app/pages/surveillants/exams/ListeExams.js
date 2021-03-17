import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Thumbnail, Body, } from 'native-base';
import { AppLoading } from 'expo';
import { getExamsByProfessor } from '../../../services/ProfessorService';
import { Actions } from 'react-native-router-flux';
import Button from '../../../components/Button';
import {theme} from '../../../core/theme'

export default class ListeExmens extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : null,
            loading : true,

        }
    }

    componentDidMount(){
        getExamsByProfessor(this.props.idProf)
        .then(response => {
            this.setState({
                data : response,
                loading : false,
            })
        })
        .catch(error => {
            alert(error)
        })
    }

    goToExam(id){
        Actions.exam({id:id})
    }

    render() {
        if(this.state.loading){
            return(
                <AppLoading />
            )
        }
        return (
            <Container>
                <Content>
                    
                    {
                        this.state.data.map(item => {
                            return(
                                <Card key={item.id}>
                                    <Body>
                                        <CardItem>
                                            <Thumbnail source={{uri:'https://www.freepngimg.com/download/paper_sheet/50192-9-exam-image-hq-image-free-png.png'}} />
                                        </CardItem>
                                        <CardItem>
                                            <Text>
                                                {"Date : "+item.date}
                                            </Text>
                                        </CardItem>
                                        <CardItem>
                                            <Text>
                                                {"Salle N°: "+item.room.numero+" | Departement : "+item.room.departement}
                                            </Text>
                                        </CardItem>
                                        <CardItem>
                                            <Text>
                                                {"Module : "+item.module.label+" | Semestre : "+item.module.semestre}
                                            </Text>
                                        </CardItem>
                                        <CardItem>
                                            <Text>
                                                {"Session : "+item.session}
                                            </Text>
                                        </CardItem>
                                        <CardItem>
                                            <Button 
                                                mode="contained" onPress={()=>this.goToExam(item.id)} 
                                                style={{
                                                    backgroundColor:theme.colors.secondary,
                                                    width : "50%"
                                                }} 
                                            >
                                                Commencer 
                                            </Button>
                                        </CardItem>
                                    </Body>
                                </Card>
                            );
                        })
                    }
                </Content>
            </Container>
        );
    }
}