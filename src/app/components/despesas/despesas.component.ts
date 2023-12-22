import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';
import { DespesasService } from 'src/app/despesas.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent {

  readonly serviceApi = environment.domain + '/despesapadrao';

  actionsRight = true;

  readonly actions: PoPageDynamicTableActions = {
    new: () => {
      this.router.navigate(['/despesas/nova']);
    },
    edit: ((id: string, resource: any) => {
      this.editDespesa(resource.cod_desp);
      console.log('edit ID: ', id);
      console.log('edit resource: ', resource);
      return resource.cod_desp;
    }),
    remove: ((id: string, resource: any) => {
      console.log('remove: ', id, resource);
      this.deleteDespesa(resource.cod_desp);
      return true
    }),
  };

  readonly fields: Array<any> = [
    { property: 'cod_desp', label: 'Código', key: true, filter: true, sortable: true },
    { property: 'desc_desp', label: 'Descrição', filter: true, sortable: true },
    { property: 'Unidade', label: 'Unidade', filter: true, sortable: true },
    { property: 'tp_desp', label: 'Tipo de Despesa', filter: true, sortable: true },
    { property: 'valor_unit', label: 'Valor Unitário', filter: true, sortable: true },
  ];

  constructor(
    private despesasService: DespesasService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('Iniciando o componente app.component.ts');
    // this.loadDespesas();
  }

  editDespesa(id: string) {
    this.router.navigate([`/despesas/editar/${id}`]);
  }

  deleteDespesa(id: string) {
    this.despesasService.deleteData(id).subscribe(
      (data) => {
        console.log(data);
        return true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
