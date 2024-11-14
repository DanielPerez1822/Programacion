import { Component } from '@angular/core';
import { Inventor } from './inventor';
import { FormsModule } from '@angular/forms';
import { InventoresService } from './inventores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,  CommonModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  public inventor: Inventor = new Inventor()
  
   titulo:string="Formulario de ingreso de Inventores"

  constructor(private inventoresService: InventoresService, private router: Router,
    private activatedRouted: ActivatedRoute
  ){}

  ngOnInit(){
    this.cargarInventore()
  }

  // cargar la Inventore actual
  cargarInventore(): void{
    this.activatedRouted.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.inventoresService.getInventor(id).subscribe( 
          (inventor) => this.inventor = inventor)
      }
    })
  }

  // Actualizar tarea
  update():void{
    this.inventoresService.update(this.inventor).subscribe(inventor=> {
      this.router.navigate(['/inventores'])
       Swal.fire('Inventor Actualizado', `Inventor: ${this.inventor.nomInventor} Actualizado con éxito!`, 'success')
    })
  }


  public create():void{
    //console.log("clicked");
    console.log(this.inventor);
  
     this.inventoresService.create(this.inventor).subscribe(inventor => 
      {this.router.navigate(["/inventores"])
        Swal.fire('Nuevo inventor', `Inventor: ${inventor.nomInventor} creado con éxito`, 'success')
      }
    );
    }
}
