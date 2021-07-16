import React, { useState } from "react";
import { 
    IonButton, 
    IonButtons, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCol, 
    IonContent, 
    IonFab, 
    IonFabButton, 
    IonGrid, 
    IonHeader, 
    IonIcon, 
    IonPage, 
    IonRow, 
    IonTitle, 
    IonToolbar, 
    isPlatform} from '@ionic/react';
import { addOutline } from "ionicons/icons";
import AddCourseModal from "../Components/AddCourseModal";
// import { useHistory } from 'react-router-dom';

 export const COURSE_DATA =[
    { id: 'c1', 
    title: 'Ionic + React - The Practical Guide', 
    enrolled: new Date('05/24/2020'),
  
},
    { id: 'c2', 
    title: 'React.js - The Complete Guide',
    enrolled: new Date('08/24/2020'),
   
},
    { id: 'c3', 
    title: 'Javascript - The Complete Guide',
    enrolled: new Date('09/27/2020'),
    goals: [
        {id: 'c1g1', text: 'finish the course'},
        {id: 'c1g2', text: 'finish the course'},
    ]
    
},
];

const Courses: React.FC = () => {
    //  const history = useHistory();

    // const changePageHandler = () => {
    //     history.push('/course-goals');
    // };

    const [isAdding, setIsAdding] = useState(false);

    const starAddCourseHandler = () => {
        setIsAdding(true);
    };

    const cancleAddCourseHandler = () => {
        setIsAdding(false);
    };
      
    return(
        <React.Fragment>
            <AddCourseModal  show={isAdding} onCancel={cancleAddCourseHandler}/>
            <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Courses</IonTitle>
                    {isPlatform('android') && (
                        <IonButtons slot="end">
                            <IonButton onClick={starAddCourseHandler}>
                                <IonIcon slot="icon-only" icon={addOutline}/>
                            </IonButton>
                        </IonButtons>
                    )}
                </IonToolbar>
            </IonHeader>
            <IonContent>
               <IonGrid>
                   {COURSE_DATA.map(course => (
                        <IonRow key={course.id}>
                        <IonCol size-md="4" offset-md="4">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>{course.title}</IonCardTitle>
                                    <IonCardSubtitle>
                                        Enrolled on {' '}
                                        {course.enrolled.toLocaleDateString('en-US',{
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                        })}
                                    </IonCardSubtitle>
                                </IonCardHeader>
                        <IonCardContent>
                            
                             <div className="ion-text-right">
                             <IonButton  
                             fill="clear" 
                             color="secondary" 
                             routerLink={'/courses/$(course.id)'}
                             >
                                View Course Goals
                             </IonButton>
                             </div>
                            
                         </IonCardContent>
                        </IonCard>
                        </IonCol>
                    </IonRow>
                   ))}
                   
               </IonGrid>
               {!isPlatform('android') && (
                    <IonFab horizontal="end" vertical="bottom">
                        <IonFabButton color="secondary" onClick={starAddCourseHandler}>
                            <IonIcon icon={addOutline}/>
                        </IonFabButton>
                    </IonFab>
               )}
            </IonContent>
            </IonPage>
        </React.Fragment>
    );
};
export default Courses;