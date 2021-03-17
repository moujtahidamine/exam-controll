import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Participants from '../pages/exam/participants'
import barcodeScanner from '../pages/scan/BarCodeScanner'
import Home from '../pages/surveillants/home'
import Infos from '../pages/surveillants/infos'
import ListeExmens from '../pages/surveillants/exams/ListeExams'
import ExamCard from '../pages/exam/ExamCard'
import ListePresence from "../pages/listePresence/ListPresence"
import {LoginScreen} from '../login/screens'

const Routes = (props) => (
   <Router>
      <Scene key = "root">

        <Scene key = "home" component = {Home} title = "Accueil"  />    
        <Scene key = "participants" component = {Participants} title = "Liste des participants"/> 
        <Scene key = "scanner" component = {barcodeScanner} title = "Scanner"/> 
        <Scene key = "exams" component = {ListeExmens} title = "Calendrier d'examens"/>
        <Scene key = "infos" component = {Infos} title = "Informations personnelles"/>
        <Scene key = "exam" component = {ExamCard} title = "Examen"/>        
        <Scene key = "exam" component = {ListePresence} title = "Liste de présence" initial = {true}/>        
        <Scene key = "loginScreen" component = {LoginScreen} title = "Espace des Surveillants" />
        
      </Scene>
   </Router>
)
export default Routes;

/*
<Scene key = "RegisterScreen" component = {RegisterScreen} title = "Register" />
<Scene key = "dashboard" component = {Dashboard} title = "Dashboard" />
<Scene key = "ForgotPasswordScreen" component = {ForgotPasswordScreen} title = "Reset password" />


*/