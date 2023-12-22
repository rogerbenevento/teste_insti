import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDynamicFormField } from '@po-ui/ng-components';
import { DespesasService } from 'src/app/despesas.service';
import { despesaFields } from 'src/app/utils/despesaFields';

@Component({
  selector: 'app-despesa-edit',
  templateUrl: './despesa-edit.component.html',
  styleUrls: ['./despesa-edit.component.css']
})
export class DespesaEditComponent {
  isHideLoading: boolean = true;
  msgLoading = 'Carregando...';
  despesa: any = {};

  fields: Array<PoDynamicFormField> = despesaFields;
  formDespesa = {};

  constructor(
    private despesasService: DespesasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDespesa();

    console.log("Despesa", this.despesa);
  }

  fillForm() {
    console.log("DADOS", this.despesa);
    this.formDespesa = {
      desc_desp: this.despesa.desc_desp,
      valor_unit: this.despesa.valor_unit,
      Unidade: this.despesa.Unidade,
      tp_desp: this.despesa.tp_desp.toString(),
      cod_desp: this.despesa.cod_desp,
    };
  }

  getDespesa() {
    this.isHideLoading = false;
    this.msgLoading = 'Carregando despesa...';

    this.despesasService.getDespesa(this.route.snapshot.params['id']).subscribe((data: any) => {  
      if (data.items.length > 0) {
        this.isHideLoading = true;
        this.despesa = data.items[0].ds_desppad.desp_pad[0];
        this.fillForm();
      }

      this.isHideLoading = true;
      return {};
    });
  }

  onSubmit() {
    this.isHideLoading = false;
    this.msgLoading = 'Atualizando despesa...';

    const payload = {...this.formDespesa, cod_desp: this.despesa.cod_desp};

    this.despesasService.putData(this.route.snapshot.params['id'], payload).subscribe((data: any) => {
      this.isHideLoading = true;
      this.despesa = data;
      
      this.router.navigate(['/despesas']);
    });
  }
}
