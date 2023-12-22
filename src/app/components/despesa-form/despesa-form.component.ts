import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoDynamicFormField } from '@po-ui/ng-components';
import { DespesasService } from 'src/app/despesas.service';
import { despesaFields } from 'src/app/utils/despesaFields';
@Component({
  selector: 'app-despesa-form',
  templateUrl: './despesa-form.component.html',
  styleUrls: ['./despesa-form.component.css']
})
export class DespesaFormComponent {
  isHideLoading: boolean = true;
  formDespesa = {};

  fields: Array<PoDynamicFormField> = despesaFields;

  constructor(
    private despesasService: DespesasService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.isHideLoading = false;

    console.log('formDespesa', this.formDespesa);

    const cod_desp = Math.floor(Math.random() * 100000) + 1;
    const payload = {...this.formDespesa, cod_desp: cod_desp};
    
    this.despesasService.postData(payload).subscribe((data: any) => {
      console.log(data);
      this.isHideLoading = true;

      this.router.navigate(['/despesas']);
    });
  }

}
