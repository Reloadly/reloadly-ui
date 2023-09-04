import { CountryISO } from '../enums/country-iso.enum';
export interface Country {
  name:     string;
  localName: string;
  iso: CountryISO,
  dialCode: string;
  code:     string;
  flag:    string;
  areaCodes?: string[];
  placeHolder?: string;
}

export class Convert {
  public static toCountry(json: string): Country {
      return JSON.parse(json);
  }

  public static countryToJson(value: Country): string {
      return JSON.stringify(value);
  }
}
