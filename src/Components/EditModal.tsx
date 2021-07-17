import { IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonText, IonButton } from "@ionic/react";
import React, { useRef, useState } from "react";

const EditModal: React.FC<{
    show: boolean;
    onCancel: () => void;
    onSave: (goalText: string) => void;
    editedGoal: {id: string; text: string} | null;
}> = props => {

    const [error, setError] = useState(' ');

    const textRef = useRef<HTMLIonInputElement>(null);

    const saveHandler = () => {
        const enteredText = textRef.current!.value;

        if(!enteredText || enteredText.toString().trim().length === 0){
            setError('Please enter a valid text!');
            return;
        }

        props.onSave(enteredText.toString ());
    };

    return(
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Your Goal</IonLabel>
                             <IonInput 
                             type="text"
                             value={props.editedGoal?.text}
                             ref={textRef}
                             />
                        </IonItem>
                    </IonCol>
                </IonRow>
                {error && (
                    <IonRow>
                        <IonCol>
                            <IonText color="danger">
                                {error}
                            </IonText>
                        </IonCol>
                    </IonRow>
                )}
                 <IonRow className="ion-text-center">
                    <IonCol>
                        <IonButton color="dark" fill="clear" onClick={props.onCancel}>Cancel</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton expand="block" color="secondary" onClick={saveHandler}>
                            Save
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};
export default EditModal;