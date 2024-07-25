
import { Component, Input } from '@angular/core';
import { ProduitComponent } from '../produit/produit.component';
import { CommonModule, UpperCasePipe, CurrencyPipe } from '@angular/common';

interface Produit {
  id: number;
  titre: string;
  description: string;
  prix: number;
}

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [ProduitComponent,UpperCasePipe,CurrencyPipe,CommonModule],
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent {
  @Input() produit: Produit | null = null ;
}