import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// ✅ Angular Material modules
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-liste-instructeurs',
  standalone: true,
  templateUrl: './liste-instructeurs.component.html',
  styleUrls: ['./liste-instructeurs.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    // ✅ Angular Material imports
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
  ]
})
export class ListeInstructeursComponent {
  searchText = '';
  displayedColumns: string[] = ['select', 'name', 'modules'];

  instructors = [
    {
      name: 'Prénom Nom',
      selected: false,
      modules: [
        { name: 'DG, Ariana, Samedi', color: '#70d6ff' },
      ],
    },
    {
      name: 'Prénom Nom',
      selected: false,
      modules: [
        { name: 'RI, Ariana, Jeudi', color: '#caffbf' },
        { name: 'Créations SW, Manouba, Mercredi', color: '#ffadad' },
        { name: 'Code Combat, Lac', color: '#ffc6ff' },
      ],
    }
  ];

  get filteredInstructors() {
    return this.instructors.filter((inst) =>
      inst.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  toggleAll(event: any) {
    this.instructors.forEach(i => i.selected = event.checked);
  }
}
