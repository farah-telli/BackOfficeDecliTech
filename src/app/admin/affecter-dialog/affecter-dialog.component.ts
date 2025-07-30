import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModuleService, ModuleResponse } from '../../services/ModuleService';
import { CobuildSpaceService, CobuildSpace } from '../../services/CobuildSpaceService';

@Component({
  selector: 'app-affecter-dialog',
  standalone: true,
  templateUrl: './affecter-dialog.component.html',
  styleUrls: ['./affecter-dialog.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AffecterDialogComponent implements OnInit {
  modules: ModuleResponse[] = [];
  spaces: CobuildSpace[] = [];
  days: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  selectedModuleId!: number;
  selectedSpaceId!: number;
  selectedDay!: string;

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  isLinear = false;

  constructor(
    private _formBuilder: FormBuilder,
    private moduleService: ModuleService,
    private spaceService: CobuildSpaceService,
    public dialogRef: MatDialogRef<AffecterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.loadModules();
    this.loadSpaces();
  }

  loadModules() {
    this.moduleService.getAllModules(0, 100).subscribe({
      next: (response) => {
        this.modules = response.content;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des modules :', err);
      }
    });
  }

  loadSpaces() {
    this.spaceService.getAllCobuildSpaces().subscribe({
      next: (data) => {
        console.log('Espaces chargés:', data);
        this.spaces = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des espaces', err);
      }
    });
  }

  selectModule(id: number) {
    this.selectedModuleId = id;
    this.firstFormGroup.controls['firstCtrl'].setValue(id);
  }

  selectSpace(id: number) {
    this.selectedSpaceId = id;
    this.secondFormGroup.controls['secondCtrl'].setValue(id);
  }

  selectDay(day: string) {
    this.selectedDay = day;
  }

  assignModule() {
    if (this.selectedModuleId && this.selectedSpaceId && this.selectedDay) {
      console.log('Données envoyées pour affectation:', {
        instructorId: this.data?.id,
        moduleId: this.selectedModuleId,
        coBuildSpaceId: this.selectedSpaceId,
        jour: this.selectedDay
      });

      const payload = {
        instructorId: this.data.id,
        moduleId: this.selectedModuleId,
        coBuildSpaceId: this.selectedSpaceId,
        jour: this.selectedDay
      };

      this.moduleService.assignModule(payload).subscribe({
        next: () => this.dialogRef.close(payload),
        error: (err) => console.error('Erreur lors de l\'affectation :', err)
      });
    }
  }
}
