import { Component, OnInit } from '@angular/core';
import { Inventor } from './inventor';
import { InventoresService } from './inventores.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inventores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inventores.component.html',
  styleUrl: './inventores.component.css'
})
export class InventoresComponent implements OnInit {

  inventores:Inventor[];

  constructor(private inventoresService: InventoresService){

  }

  ngOnInit(): void {
    this.inventoresService.getInventores().subscribe(
      inventores => this.inventores = inventores
    )
  }

  delete(inventor:Inventor):void{
    Swal.fire({
      title: "Esta segur@?",
      text: `Seguro deseas eliminar la Tarea: ${inventor.nomInventor} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.inventoresService.delete(inventor.id).subscribe(
          response=>{
            this.inventores = this.inventores.filter(inv=> inv !== inventor)
            Swal.fire({
              title: "Borrada!",
              text: `Tu Tarea ha sido eliminada: ${inventor.nomInventor}`,
              icon: "success"
            });
          }
        )
      }
    });
  }

}


