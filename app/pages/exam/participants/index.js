import React from 'react';
import { Container, Content, List, ListItem, Text, Thumbnail } from 'native-base';
import { getExamParticipants } from '../../../services/ExamService';
class Participants extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : null,
            isLoading : true,
        }
    }

    componentDidMount(){
        getExamParticipants(this.props.id)
        .then(response => {
            this.setState({
                data : response,
                isLoading : false,
            })
            //alert("[0] : "+response[0].nom)
        }) 
        .catch(error =>{
            alert(error)
        })
    }

    render() {
        if(this.state.data){
            if(this.state.data.length === 0){
                
                return(<Text>La liste est Vide</Text>)
            }
            return (
                <Container>
                    <Content>
                        <List>
                            {
                                this.state.data.map(item => {
                                    
                                    return(
                                        <ListItem key={item.id}>
                                            <Thumbnail source={require('../../../assets/student.png')} />
                                            <Text>{item.nom +" "+item.prenom}</Text>
                                            <Text note>{" " + item.cne+" | "+item.apogee }</Text>
                                        </ListItem>
                                    );                                
                                })
                            }
                        </List>
                    </Content>
                </Container>
                    
            );
        }
        else{
            return(<Text>Chargement...</Text>)
        }
    }
}

export default Participants;