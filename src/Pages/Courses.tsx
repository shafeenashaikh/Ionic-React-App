import React from "react";
import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from '@ionic/react';
// import { useHistory } from 'react-router-dom';

const COURSE_DATA =[
    { id: 'c1', title: 'Ionic + React - The Practical Guide'},
    { id: 'c2', title: 'React.js - The Complete Guide'},
    { id: 'c1', title: 'Javascript - The Complete Guide'},
];

const Courses: React.FC = () => {
    //  const history = useHistory();

    // const changePageHandler = () => {
    //     history.push('/course-goals');
    // };

    return(
        <React.Fragment>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Courses</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
               <IonGrid>
                   {COURSE_DATA.map(course => (
                        <IonRow key={course.id}>
                        <IonCol size-md="4" offset-md="4">
                        <IonCard>
                         <IonCardContent>
                             <h2 className="ion-text-center">{course.title}</h2>
                             <IonButton routerLink="">View Course Goals</IonButton>
                         </IonCardContent>
                        </IonCard>
                        </IonCol>
                    </IonRow>
                   ))}
                   
               </IonGrid>
            </IonContent>
        </React.Fragment>
    );
};
export default Courses;