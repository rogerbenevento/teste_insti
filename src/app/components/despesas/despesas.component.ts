import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoModalComponent, PoTableColumn, PoModalAction } from '@po-ui/ng-components';
import { DespesasService } from 'src/app/despesas.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent {

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('optionsForm', { static: true }) form: NgForm;

  columns: Array<PoTableColumn> = [
    { property: 'id', label: 'Código' }, 
    { property: 'desc_desp', label: 'Descrição' }, 
    { property: 'valor_unit', label: 'Valor Unitário' },
    { property: 'tp_desp', label: 'Tipo de Despesa', type: 'columnTemplate' },
  ];

  items: Array<any> = [];

  confirm: PoModalAction = {
    action: () => {
      alert('Confirmado')
    },
    label: 'Confirm'
  };

  constructor(private despesasService: DespesasService) { }

  ngOnInit() {
    console.log('Iniciando o componente app.component.ts');
    this.despesasService.getAll().subscribe((data: any) => {
      console.log(data);
      this.items = data;
    });
  }

  addDespesa() {
    // this.poModal.open();
  }

  closeModal() {
    this.form.reset();
    this.poModal.close();
  }

  restore() {
    this.form.reset();
  }

  confirmDespesa() {
    alert("TESTE");
  }
}
