import { Nomenclature } from "../domain";

export interface NomenclatureRepositoryType {
  getNomenclatures: () => Promise<Nomenclature[]>;
  getNomenclature: (id: number) => Promise<Nomenclature>;
  addNomenclature: (
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ) => Promise<Nomenclature>;
  deleteNomenclature: (id: number) => Promise<void>;
  editNomenclature: (
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ) => Promise<Nomenclature>;
}
