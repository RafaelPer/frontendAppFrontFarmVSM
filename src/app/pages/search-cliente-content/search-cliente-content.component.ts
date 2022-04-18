import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../services/clientes/clientes.service';
import {Cliente} from '../../models/cliente';
import {Cidade} from '../../models/cidade';
// import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search-cliente-content',
  templateUrl: './search-cliente-content.component.html',
  styleUrls: ['./search-cliente-content.component.css']
})
export class SearchClienteContentComponent implements OnInit {

  cliente = {} as Cliente;

  // cpfCnpjSearch: string = '';

  // searchClienteForm = this.formBuilder.group({
  //   cnpj: ["", Validators.required]
  // });

  // clienteForm = this.formBuilder.group({
  //   clienteIdPk: this.cliente.clienteIdPk,
  //   clienteCPFCNPJ: this.cliente.clienteCPFCNPJ,
  //   clienteNome: this.cliente.clienteNome,
  //   clienteEnderecoLogradouro: this.cliente.clienteEnderecoLogradouro,
  //   clienteEnderecoNumero: this.cliente.clienteEnderecoNumero,
  //   clienteEnderecoBairro: this.cliente.clienteEnderecoBairro,
  //   clienteEnderecoCep: this.cliente.clienteEnderecoCep,
  //   cidadeUf: this.cliente.clienteEnderecoCidadeFk.cidadeUf,
  //   cidadeNome: this.cliente.clienteEnderecoCidadeFk.cidadeNome,
  //   lienteTelefone: this.cliente.clienteTelefone,
  //   clienteDesativado: false,
  // });

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    
  }

  buscarClienteByCnpjAndClienteAtivado(form: NgForm){
    this.cliente = {} as Cliente;
    console.log(form.value.nameCpfCnpj);
    console.log(form.value);
    this.clienteService.findClienteByCnpjAndClienteAtivado(form.value.nameCpfCnpj).subscribe((cli: Cliente) => {
      this.cleanForm(form);
      console.log(cli);
      this.cliente = cli;
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
  }

}
