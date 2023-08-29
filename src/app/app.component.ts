import { Component } from '@angular/core';
import { PessoasService } from './shared/services/pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiNgFor';
  constructor(private estadoService: PessoasService){}
  public estado: any = [];
  ngOnInit(): void{
    this.estadoService.getPessoas().subscribe(
      data => {
        this.estado = data
      }
    )
  }
}
