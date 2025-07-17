import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ModuleService } from '../../services/ModuleService';

@Component({
  selector: 'app-affecter-dialog',
  standalone: true,
  templateUrl: './affecter-dialog.component.html',
  styleUrls: ['./affecter-dialog.component.css'],
  imports: [CommonModule, FormsModule, MatButtonModule]
})
export class AffecterDialogComponent {
  currentStep = 1;

  modules = [
    { id: 1, name: 'Algorithmique' },
    { id: 2, name: 'Code Combat' },
    { id: 3, name: 'Design Graphique' },
    { id: 4, name: 'Architecture et Ingénierie 3D' },
    { id: 5, name: 'Anglais' }


  ];

  spaces = [
    { id: 1, name: 'Lac' },
    { id: 2, name: 'Manouba' },
    { id: 3, name: 'CUN' }
  ];

  days = ['Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  selectedModuleId: number | null = null;
  selectedSpaceId: number | null = null;
  selectedDay: string = '';

  constructor(
    public dialogRef: MatDialogRef<AffecterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private moduleService: ModuleService
  ) {}

  selectModule(id: number) {
    this.selectedModuleId = id;
  }

  selectSpace(id: number) {
    this.selectedSpaceId = id;
  }

  selectDay(day: string) {
    this.selectedDay = day;
  }

  get selectedModuleName(): string {
    const mod = this.modules.find(m => m.id === this.selectedModuleId);
    return mod ? mod.name : '...';
  }

  get selectedSpaceName(): string {
    const space = this.spaces.find(s => s.id === this.selectedSpaceId);
    return space ? space.name : '...';
  }

  get selectedDayLabel(): string {
    return this.selectedDay || '...';
  }

  next() {
    if (this.currentStep < 3) {
      this.currentStep++;
    } else {
      const payload = {
        instructorId: this.data.id,
        moduleId: this.selectedModuleId!,
        coBuildSpaceId: this.selectedSpaceId!,
        jour: this.selectedDay
      };

    this.moduleService.assignModule(payload).subscribe({
  next: () => this.dialogRef.close(payload),
  error: (err) => console.error('Erreur affectation', err)
});

    }
  }

  previous() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
