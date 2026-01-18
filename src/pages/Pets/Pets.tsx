import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { add, calendarOutline, timeOutline } from 'ionicons/icons';
import './Pets.css';

// Mock data for demonstration
const mockPet = {
  name: 'Buddy',
  birthday: 'March 15, 2020',
  nextMedication: {
    date: 'January 20, 2026',
    time: '08:00 AM',
  },
  previousMedication: {
    date: 'January 17, 2026',
    time: '08:00 AM',
  },
};

const Pets: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pets</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="pets-container">
          <IonCard className="pet-card">
            <IonCardHeader>
              <IonCardTitle className="pet-name">{mockPet.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem lines="none" className="pet-info-item">
                <IonIcon icon={calendarOutline} slot="start" color="primary" />
                <IonLabel>
                  <p className="info-label">Birthday</p>
                  <h3>{mockPet.birthday}</h3>
                </IonLabel>
              </IonItem>

              <IonItem lines="none" className="pet-info-item next-med">
                <IonIcon icon={timeOutline} slot="start" color="success" />
                <IonLabel>
                  <p className="info-label">Next Medication</p>
                  <h3>{mockPet.nextMedication.date}</h3>
                  <p className="med-time">{mockPet.nextMedication.time}</p>
                </IonLabel>
              </IonItem>

              <IonItem lines="none" className="pet-info-item prev-med">
                <IonIcon icon={timeOutline} slot="start" color="medium" />
                <IonLabel>
                  <p className="info-label">Previous Medication</p>
                  <h3>{mockPet.previousMedication.date}</h3>
                  <p className="med-time">{mockPet.previousMedication.time}</p>
                </IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>
        </div>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Pets;
