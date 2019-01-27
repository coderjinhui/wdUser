export interface IGoodAdd {
  name: string;
  category: string;
  inValue: number;
  outValue: number;
  date: Date;
}
export interface InputGood {
  name: string;
  category: string;
  inValue: string;
  outValue: string;
}

export class Good implements IGoodAdd {
  name: string;
  category: string;
  inValue: number;
  outValue: number;
  date: Date;
  constructor(input: InputGood) {
    this.name = input.name;
    this.category = input.category;
    this.date = new Date();
    this.inValue = Number(input.inValue);
    this.outValue = Number(input.outValue);
  }
}
