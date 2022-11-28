import { Nomenclature } from "../../domain";
import { NomenclatureRepositoryType } from "../INomenclatureRepository";

export default class NomenclatureUseCase {
  constructor(protected nomenclatureRepository: NomenclatureRepositoryType) {}

  public async getNomenclatures(): Promise<Nomenclature[]> {
    return this.nomenclatureRepository.getNomenclatures();
  }

  public async getNomenclature(id: number): Promise<Nomenclature> {
    return this.nomenclatureRepository.getNomenclature(id);
  }

  public async addNomenclature(
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ): Promise<Nomenclature> {
    return this.nomenclatureRepository.addNomenclature(
      nomenclature,
      dictionaryFile
    );
  }

  public async editNomenclature(
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ): Promise<Nomenclature> {
    return this.nomenclatureRepository.editNomenclature(
      nomenclature,
      dictionaryFile
    );
  }

  public async deleteNomenclature(id: number): Promise<void> {
    this.nomenclatureRepository.deleteNomenclature(id);
  }
}
