import { Component, OnInit } from '@angular/core';
import { ApiObject } from 'src/app/interfaces/laminas-donadores-interface';
import { Embedded } from 'src/app/interfaces/laminas-donadores-interface';
import { DonadoresEntity } from 'src/app/interfaces/laminas-donadores-interface';
import { Oauth } from 'src/app/interfaces/oauth-interface';
import { LaminasDonadoresService } from 'src/app/servicios/laminas-donadores.service';
import { OauthService } from 'src/app/servicios/oauth.service';


@Component({
  selector: 'app-api',
  templateUrl: './donadores.component.html',
  styleUrls: ['./donadores.component.css']
})
export class DonadoresComponent implements OnInit {
  title = 'Filmopedia';
 
  dataG: ApiObject = <ApiObject>{};
  dataR: Embedded = <Embedded>{};
  dataF: DonadoresEntity[] = <DonadoresEntity[]>{};

  dataT: Oauth = <Oauth>{};
  token: String = "";


  constructor(private infoUsuarios:LaminasDonadoresService, private solicitarToken: OauthService) { 
    //this.token = solicitarToken.getToken();
    //console.warn(this.token)

     
    this.solicitarToken.getToken().subscribe(
      data=>{
        console.warn(<ApiObject> data)
        this.dataT = <Oauth> data;

        console.warn(this.dataT.access_token)
        this.token = this.dataT.access_token;
      } 
    )


    this.infoUsuarios.getDonadores(this.token).subscribe(
      data=>{
        console.warn(<ApiObject> data)
        this.dataG = <ApiObject> data;

        console.warn(<Embedded> this.dataG._embedded.donadores)
        this.dataR = <Embedded> this.dataG._embedded.donadores;

        //console.warn(<UsuariosEntity[]> this.dataR.usuarios)
        this.dataF = <DonadoresEntity[]> this.dataR;

      }
    )



  }
  ngOnInit(): void {
	}

}
