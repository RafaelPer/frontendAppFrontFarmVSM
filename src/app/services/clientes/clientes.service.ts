import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cliente } from '../../models/cliente';
import { ToastrService } from 'ngx-toastr';
import { NotificationType } from 'src/app/models/notification-type';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = 'http://localhost:8080/api/';

  // cliente: Cliente = {
  //   clienteIdPk: 1,
  //   clienteNome: "RAFAEL",
  //   clienteEnderecoLogradouro: "RUA A",
  //   clienteEnderecoNumero: "111",
  //   clienteEnderecoBairro: "BAIRRO A",
  //   clienteEnderecoCep: "19880000",
  //   clienteEnderecoCidadeFk: {
  //       cidadeIdPk: 1,
  //       cidadeNome: "ASSIS",
  //       cidadeUf: "SP",
  //       cidadeDesativada: false
  //   },
  //   clienteTelefone: "11999999999",
  //   clienteDesativado: false,
  //   clienteCPFCNPJ: "11111111111"
  // };

  constructor(private httpClient: HttpClient, private toastrService: ToastrService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  findClienteByCnpjAndClienteAtivado(cpfCnpj: string): Observable<Cliente>{
    console.log(cpfCnpj);
    console.log(this.httpClient.get<Cliente>(this.url + 'getClienteByCpfCnpjAndClienteAtivado/' + cpfCnpj)
    .pipe(
      retry(2),
      catchError(this.handleError)
    ));
    return this.httpClient.get<Cliente>(this.url + 'getClienteByCpfCnpjAndClienteAtivado/' + cpfCnpj)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);

    return throwError(errorMessage);
  };
}
