export interface FormInputSchema {
  type: string;
  id: string;
  label: string;
  placeholder?: string;
  required: boolean;
  patternmatch?: RegExp;
  selectOptions?: SelectOptions[];
  maxLength?:number
  max?:number,
  min? : number
}

interface SelectOptions {
  value: string;
  label: string;
}

export interface FormSchema {
  schema: NewFormSchema[];
  formName: string;
}

export interface NewFormSchema {
  name: string;
  noOfCol: number;
  fields: FormInputSchema[];
}
