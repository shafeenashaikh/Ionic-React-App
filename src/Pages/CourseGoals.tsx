import React from "react";
import { 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage,
    IonButtons,
    IonBackButton,
} from "@ionic/react";
import { useParams} from 'react-router-dom';
import { COURSE_DATA } from "./Courses";

const CourseGoals: React.FC = () => {
const selectedCourseId = useParams<{courseId: string}>().courseId;

const selectedCourse = COURSE_DATA.find(c => c.id === selectedCourseId);

    return(
       <IonPage>
        <IonHeader>
            <IonToolbar>
                 <IonButtons slot="start">
                     <IonBackButton />
                 </IonButtons>
                <IonTitle>
                    {selectedCourse ? selectedCourse.title : 'course'}
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h2>This works - Courses goals page!</h2>
            {/* {selectedCourse && (
                <IonList>
                    {selectedCourse.goals?.map(goal => (
                        <IonItem key={goal.id}>
                            <IonLabel>{goal.text}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            )} */}
        </IonContent>
      </IonPage>
    );
};
export default CourseGoals;