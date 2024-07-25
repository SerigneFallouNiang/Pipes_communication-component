import { Component} from '@angular/core';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';
import { CommonModule, UpperCasePipe, CurrencyPipe } from '@angular/common';

interface Produit {
  id: number;
  titre: string;
  description: string;
  prix: number;
}

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule,DetailProduitComponent,UpperCasePipe,CurrencyPipe],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent {
  produits: Produit[] = [
    { id: 1, titre: 'Ordinateur portable', description: 'Ordinateur portable puissant', prix: 999.99 },
    { id: 2, titre: 'Smartphone', description: 'Dernier modèle de smartphone', prix: 699.50 },
    { id: 3, titre: 'Tablette', description: 'Tablette légère et performante', prix: 349.99 }
  ];

  produitSelectionne: Produit | null = null;

  selectionnerProduit(produit: Produit) {
    this.produitSelectionne = produit;

}
}