import { Nomenclature } from "../domain";

export type NomenclatureRepositoryInterface = {
  getNomenclatures: () => Promise<Nomenclature[]>;
  getNomenclature: (id: number) => Promise<Nomenclature>;
  addNomenclature: (nomenclature: Nomenclature) => Promise<Nomenclature>;
  deleteNomenclature: (id: number) => Promise<void>;
  editNomenclature: (nomenclature: Nomenclature) => Promise<Nomenclature>;
};
