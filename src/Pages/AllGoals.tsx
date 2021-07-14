import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const AllGoals: React.FC = () => {
    

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar >
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