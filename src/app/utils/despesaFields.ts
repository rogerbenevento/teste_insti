import { PoDynamicFormField } from "@po-ui/ng-components";

export const despesaFields: Array<PoDynamicFormField> = [
  {
    property: 'desc_desp',
    required: true,
    maxLength: 255,
    placeholder: "Descrição da depesa, exeplo: Pedagios, KM ida de volta Cidade A ate cidade B, Refeição, etc.",
    label: "Descrição da despesa",
    gridColumns: 12,
  },
  {
    property: 'valor_unit',
    required: true,
    maxLength: 255,
    placeholder: "Valor unitário da despesa, exeplo: 10.00",
    label: "Valor unitário",
    gridColumns: 6,
    gridSmColumns: 12,
  },
  {
    property: 'Unidade',
    required: true,
    maxLength: 255,
    placeholder: "Unidade de medida, exeplo: KM, UN, etc.",
    label: "Unidade de medida",
    gridColumns: 6,
    gridSmColumns: 12,
  },
  {
    property: 'tp_desp',
    required: true,
    maxLength: 255,
    placeholder: "Tipo de despesa, exeplo: Pedagios, KM ida de volta Cidade A ate cidade B, Refeição, etc.",
    label: "Tipo de despesa",
    options: [
      { label: 'Valor unitário', value: '1' },
      { label: 'Valor total', value: '2' },
    ],
    fieldLabel: 'label',
    fieldValue: 'value',
    gridColumns: 12,
  },
];