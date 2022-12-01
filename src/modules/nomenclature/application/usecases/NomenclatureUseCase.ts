import { NotifierType } from "modules/core/application/NotifierType";
import { Nomenclature } from "../domain";
import { NomenclatureRepositoryType } from "../NomenclatureRepositoryType";

export type NomenclatureUseCaseType = {
  getNomenclatures: () => Promise<Nomenclature[]>;
  getNomenclature: (id: number) => Promise<Nomenclature>;
  addNomenclature: (nomenclature: Nomenclature) => Promise<Nomenclature>;
  deleteNomenclature: (id: number) => Promise<void>;
  editNomenclature: (nomenclature: Nomenclature) => Promise<Nomenclature>;
};

export function createNomenclatureUseCase(
  nomenclatureRepository: NomenclatureRepositoryType,
  notifier: NotifierType
): NomenclatureUseCaseType {
  const getNomenclatures = async (): Promise<Nomenclature[]> => {
    return nomenclatureRepository.getNomenclatures();
  };

  const getNomenclature = async (id: number): Promise<Nomenclature> => {
    return nomenclatureRepository.getNomenclature(id);
  };

  const addNomenclature = async (
    nomenclature: Nomenclature
  ): Promise<Nomenclature> => {
    return nomenclatureRepository.addNomenclature(nomenclature);
  };

  const editNomenclature = async (
    nomenclature: Nomenclature
  ): Promise<Nomenclature> => {
    return nomenclatureRepository.editNomenclature(nomenclature);
  };

  const deleteNomenclature = async (id: number): Promise<void> => {
    nomenclatureRepository.deleteNomenclature(id);
  };

  return {
    getNomenclatures,
    getNomenclature,
    addNomenclature,
    deleteNomenclature,
    editNomenclature,
  };
}
