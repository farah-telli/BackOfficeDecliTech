import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { AffecterDialogComponent } from '../../affecter-dialog/affecter-dialog.component';
import { UserService } from '../../../services/UserService';

@Component({
  selector: 'app-liste-instructeurs',
  standalone: true,
  templateUrl: './liste-instructeurs.component.html',
  styleUrls: ['./liste-instructeurs.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ]
})
export class ListeInstructeursComponent {
  searchText: string = '';
  currentPage = 1;
  itemsPerPage = 8;

  displayedColumns: string[] = ['select', 'name', 'modules', 'action'];

  matiereStyles: { [key: string]: { bg: string; text: string } } = {
    'Création de Sites Web': { bg: '#FFB7B0', text: '#750000' },
    'Code Combat': { bg: '#F9C4FF', text: '#731D7D' },
    'DJV': { bg: '#8F5300', text: '#FFD198' },
    'Design Graphique': { bg: '#59D7DE', text: '#005F70' },
    'Robotique Intelligente': { bg: '#C9E8CD', text: '#0C4D14' },
    'Architecture et Ingénierie 3D': { bg: '#FBE28F', text: '#5E4903' },
    'Coding & IA Générative': { bg: '#7559DE', text: '#FFFFFF' },
    'Intelligence Artificielle': { bg: '#271ECA', text: '#FFFFFF' },
    'UX/UI Design': { bg: '#38A05C', text: '#FFFFFF' },
    'Conception Robotique': { bg: '#005F70', text: '#59D7DE' },
    'Dév Apps': { bg: '#FFCB82', text: '#675030' },
    'Algorithmique': { bg: '#9E38A0', text: '#FFFFFF' },
    'anglais': { bg: '#DA0004', text: '#FFFFFF' },
    'Soft Skills': { bg: '#DF00AF', text: '#FFFFFF' },
    'Microsoft Microbit': { bg: '#7ABAE2', text: '#000B46' },
    'Internet of Things': { bg: '#FFE852', text: '#844D00' },
    'Programmation Informatique': { bg: '#68007A', text: '#FFFFFF' },
    'Psychologie Positive': { bg: '#940074', text: '#940074' },
    'Entrepreneuriat': { bg: '#BFFF71', text: '#03542D' }
  };

  instructors = [
    {
      name: 'Farah Telli',
      selected: false,
      modules: [
        { name: 'Création de Sites Web, Manouba, Mercredi' },
        { name: 'Code Combat, Lac, Vendredi' }
      ]
    },
    {
      name: 'Omar Gharbi',
      selected: false,
      modules: [
        { name: 'Design Graphique, CUN, Jeudi' },
        { name: 'DJV, Ariana, Mercredi' }
      ]
    },
    {
      name: 'Karim Trabelsi',
      selected: false,
      modules: [
        { name: 'Robotique Intelligente, Lac, Samedi' },
        { name: 'Architecture et Ingénierie 3D, Manouba, Dimanche' }
      ]
    },
       {
      name: 'Hend Trabelsi',
      selected: false,
      modules: [
        { name: ' DJV, Lac, Samedi' },
        { name: 'Architecture et Ingénierie 3D, Manouba, Dimanche' }
      ]
    },
       {
      name: 'Rihem Ouesleti',
      selected: false,
      modules: [
        { name: 'Conception Robotique , Lac, Samedi' },
        { name: 'Anglais, Manouba, Dimanche' }
      ]
    },
       {
      name: 'Hadil laabidi',
      selected: false,
      modules: [
        { name: 'Robotique Intelligente, Lac, Samedi' },
        { name: 'Algorithmique, Manouba, Dimanche' }
      ]
    },
    {
      name: 'Lina Mahfoudh',
      selected: false,
      modules: [
        { name: 'Coding & IA Générative, Ariana, Jeudi' },
        { name: 'Intelligence Artificielle, Lac, Vendredi' }
      ]
    },
      {
      name: 'Omar Gharbi',
      selected: false,
      modules: [
        { name: 'Design Graphique, CUN, Jeudi' },
        { name: 'DJV, Ariana, Mercredi' }
      ]
    },
      {
      name: 'Hadyl laabidi',
      selected: false,
      modules: [
        { name: 'Design Graphique, CUN, Jeudi' },
        { name: 'DJV, Ariana, Mercredi' }
      ]
    }
  ];

constructor(private dialog: MatDialog, private userService: UserService) {}



  get totalPages() {
    return Math.ceil(this.filteredInstructorsList().length / this.itemsPerPage);
  }

  filteredInstructorsList() {
    return this.instructors.filter((inst) =>
      inst.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  filteredInstructors() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredInstructorsList().slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  toggleAll(event: any) {
    const checked = event.target.checked;
    this.filteredInstructors().forEach((inst) => (inst.selected = checked));
  }

affecter(row: any) {
  const dialogRef = this.dialog.open(AffecterDialogComponent, {
    width: '640px',
    height: '535px',
    panelClass: 'custom-dialog',
    data: row
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Affectation confirmée :', result);
    }
  });
}




  logout() {
    // Action déconnexion
  }

  getStyleForModule(moduleName: string): { bg: string; text: string } {
    for (const key in this.matiereStyles) {
      if (moduleName.toLowerCase().includes(key.toLowerCase())) {
        return this.matiereStyles[key];
      }
    }
    return { bg: '#ccc', text: '#000' };
  }
}
