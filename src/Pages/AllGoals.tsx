import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// import { COURSE_DATA } from "./Courses";

const AllGoals: React.FC = () => {
    
    // const goals = COURSE_DATA.map(course => {
    //     return course.goals;
    // }).reduce({goalArr, nestedGoals} => {
    //     let updatedGoalArray = goalArr;
    //     for (const goal of nestedGoals) {
    //        updatedGoalArray = updatedGoalArray.concate(goal);
    //     }
    //     return updatedGoalArray;
    // }, [] );

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar >
                  <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>  
                    <IonTitle>All Goals</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>This works - All goals page!</h2>
            </IonContent>
        </IonPage>
    );
};
export default AllGoals;