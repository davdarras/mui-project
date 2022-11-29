import { Nomenclature } from "../domain";
import { NomenclatureRepositoryType } from "../NomenclatureRepositoryType";

export type NomenclatureUseCaseType = {
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
};

export function createNomenclatureUseCase(
  nomenclatureRepository: NomenclatureRepositoryType
): NomenclatureUseCaseType {
  const getNomenclatures = async (): Promise<Nomenclature[]> => {
    return nomenclatureRepository.getNomenclatures();
  };

  const getNomenclature = async (id: number): Promise<Nomenclature> => {
    return nomenclatureRepository.getNomenclature(id);
  };

  const addNomenclature = async (
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ): Promise<Nomenclature> => {
    return nomenclatureRepository.addNomenclature(nomenclature, dictionaryFile);
  };

  const editNomenclature = async (
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ): Promise<Nomenclature> => {
    return nomenclatureRepository.editNomenclature(
      nomenclature,
      dictionaryFile
    );
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
