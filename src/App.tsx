import React from 'react';
import { 
  IonApp, 
  IonIcon, 
  IonLabel, 
  IonRouterOutlet, 
  IonTabBar,
   IonTabButton, 
   IonTabs 
  } from '@ionic/react';
import { Route, Redirect} from 'react-router-dom';
import { IonReactRouter} from '@ionic/react-router';
import {list, trophyOutline} from 'ionicons/icons';

import Courses from './Pages/Courses';
import CourseGoals from './Pages/CourseGoals';
import AllGoals from './Pages/AllGoals';




/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/theme.css'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
      <Route path="/Courses" exact>
        <Courses />
      </Route>
      <Route path="/all-goals" exact>
        <AllGoals />
      </Route>
      <Route path="/Course-goals">
        <CourseGoals />
      </Route>
      <Redirect to="/Courses"/>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="all-goals" href="/all-goals">
          <IonIcon icon={list}/>
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab="courses" href="Courses">
          <IonIcon icon={trophyOutline}/>
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
