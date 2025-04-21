import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-rendez-vous',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-rendez-vous.component.html',
  styleUrls: ['./mes-rendez-vous.component.css']
})
export class MesRendezVousComponent implements OnInit {
  rdv: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      console.error('❌ Aucun utilisateur trouvé dans le localStorage.');
      return;
    }

    const user = JSON.parse(storedUser);
    const patientId = user?.id;

    if (patientId) {
      this.http.get<any[]>(`http://localhost:3000/api/appointments/patient/${patientId}`)
        .subscribe({
          next: (appointments) => {
            this.rdv = appointments;
            console.log('📅 RDV chargés', this.rdv);
          },
          error: (err) => {
            console.error('❌ Erreur chargement RDV :', err);
          }
        });
    } else {
      console.warn('⚠️ ID patient introuvable dans l’objet user.');
    }
  }
}
