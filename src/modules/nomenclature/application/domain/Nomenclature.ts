import { NomenclatureItem } from "./NomenclatureItem";

export type Nomenclature = {
  id: number;
  name: string;
  items?: NomenclatureItem[];
  dictionaryFile?: FileList;
};
