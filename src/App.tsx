import React from 'react';
import { 
  IonApp, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonMenu, 
  IonMenuToggle, 
  IonRouterOutlet, 
  IonTabBar,
   IonTabButton, 
   IonTabs, 
   IonTitle, 
   IonToolbar
  } from '@ionic/react';
import { Route, Redirect} from 'react-router-dom';
import { IonReactRouter} from '@ionic/react-router';
import {list, options, trophyOutline} from 'ionicons/icons';

import Courses from './Pages/Courses';
import CourseGoals from './Pages/CourseGoals';
import AllGoals from './Pages/AllGoals';
import Filter from './Pages/Filter';




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

    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
         
          <IonTitle>Course Goals</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
        <IonMenuToggle>
          <IonItem button routerLink="/all-goals">
            <IonIcon  slot="start" icon={list} />
            <IonLabel>All Goals</IonLabel>
          </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
          <IonItem button routerLink="/filter">
            <IonIcon  slot="start" icon={options} />
            <IonLabel>Filter</IonLabel>
          </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

      <IonTabs>
      <IonRouterOutlet id="main">
        <Route path="/filter" exact>
          <Filter/>
        </Route>
      <Route path="/Courses" exact>
        <Courses />
      </Route>
      <Route path="/all-goals" exact>
        <AllGoals />
      </Route>
      <Route path="/Courses/:courseId">
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
