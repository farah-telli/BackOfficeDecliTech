import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-instructeur',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard-instructeur.component.html',
  styleUrl: './dashboard-instructeur.component.css'
})
export class DashboardInstructeurComponent {
projetsList: string[] = [
  'RI-1731', 'RI-1732', 'RI-1733', 'RI-1734', 'RI-1735',
  'RI-1736', 'RI-1737', 'RI-1738', 'RI-1739', 'RI-1740',
  'RI-1741', 'RI-1742', 'RI-1743', 'RI-1744', 'RI-1745',
  'RI-1746', 'RI-1747', 'RI-1748', 'RI-1749'
];
  enfants = [
    {
      space: 'Ariana S2',
      sexe:'Féminin',
      enfant: 'Prénom Nom',
      titre: 'leader',
      classe: 'Declitech-RI',
      codeclasse: '7Z4Z0',
      Pseudonyme: 'Prénom Nom',
      MDP: '0125',
      checked: false,
      projets: [],
      showDropdown: false,
          dateDerniereSeance: '', // 👈 ICI

       informations: '',
    },
     {
      space: 'Ariana S2',
      sexe:'Masculin',
      enfant: 'Prénom Nom',
      titre: 'leader',
      classe: 'Declitech-RI',
      codeclasse: '7Z4Z0',
      Pseudonyme: 'Prénom Nom',
      MDP: '0125',
      checked: false,
      projets: [],
      showDropdown: false,
          dateDerniereSeance: '', // 👈 ICI

       informations: '',
    },
     {
      space: 'Ariana S2',
      sexe:'Féminin',
      enfant: 'Prénom Nom',
      titre: 'leader',
      classe: 'Declitech-RI',
      codeclasse: '7Z4Z0',
      Pseudonyme: 'Prénom Nom',
      MDP: '0125',
      checked: false,
      projets: [],
      showDropdown: false,
          dateDerniereSeance: '', // 👈 ICI

       informations: '',
    },
     {
      space: 'Ariana S2',
      sexe:'Masculin',
      enfant: 'Prénom Nom',
      titre: 'explorateur',
      classe: 'Declitech-RI',
      codeclasse: '7Z4Z0',
      Pseudonyme: 'Prénom Nom',
      MDP: '0125',
      checked: false,
      projets: [],
      showDropdown: false,
       informations: '',
      dateDerniereSeance: '', // 👈 ICI

    },
  ];

  toggleDropdown(res: any) {
    res.showDropdown = !res.showDropdown;
  }
addProjet(res: any, projet: string) {
  res.projets = res.projets || [];
  if (!res.projets.includes(projet)) {
    res.projets.push(projet);
  }
}
searchText = ''; // Texte global pour la recherche

get filteredenfants() {
  return this.enfants.filter(res =>
    (res.space?.toLowerCase().includes(this.searchText.toLowerCase()) ||
     res.enfant?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      res.sexe?.toLowerCase().includes(this.searchText.toLowerCase()) ||
     res.titre?.toLowerCase().includes(this.searchText.toLowerCase()))
  );
}


}
