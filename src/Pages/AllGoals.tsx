import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const AllGoals: React.FC = () => {
    

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