import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-despesa-form',
  templateUrl: './despesa-form.component.html',
  styleUrls: ['./despesa-form.component.css']
})
export class DespesaFormComponent {

  formDespesa: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formDespesa = this.formBuilder.group({
      cod_desp: new FormControl('', [Validators.required]),
      desc_desp: new FormControl('', [Validators.required]),
      valor_unit: new FormControl('', [Validators.required]),
      tp_desp: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formDespesa.value);
  }

}
