import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Treatments.css';

const Treatments: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Treatments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Treatments</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="page-content">
          <h2>Treatments</h2>
          <p>Manage your pet medications</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Treatments;
