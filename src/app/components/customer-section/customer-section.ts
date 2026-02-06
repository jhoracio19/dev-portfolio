import { Component } from '@angular/core';
import { Cliente } from '../../models/client-model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-section',
  imports: [NgFor, NgIf],
  templateUrl: './customer-section.html',
  styleUrl: './customer-section.css',
})
export class CustomerSection {
  clientes: Cliente[] = [
    {
      nombreNegocio: 'Especialista Otorrinolaringólogo',
      categoria: 'Sector Salud',
      logroPrincipal: 'Optimización de Conversión y Agendado',
      testimonio:
        'José Horacio transformó nuestra presencia digital; la plataforma no solo es rápida, sino que ha facilitado la captación de nuevos pacientes de forma profesional.',
      urlWeb: 'https://otorrinotlaxcala.com',
    },
    // TODO: Aquí se agregan los clientes.
  ];
}
