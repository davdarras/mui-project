import { Nomenclature } from "../domain";
import { NomenclatureRepositoryInterface } from "./Nomenclature.repository.interface";

export default class NomenclatureService {
  constructor(
    protected nomenclatureRepository: NomenclatureRepositoryInterface
  ) {}

  public async getNomenclatures(): Promise<Nomenclature[]> {
    return this.nomenclatureRepository.getNomenclatures();
  }

  public async getNomenclature(id: number): Promise<Nomenclature> {
    return this.nomenclatureRepository.getNomenclature(id);
  }

  public async addNomenclature(
    nomenclature: Nomenclature
  ): Promise<Nomenclature> {
    return this.nomenclatureRepository.addNomenclature(nomenclature);
  }

  public async editNomenclature(
    nomenclature: Nomenclature
  ): Promise<Nomenclature> {
    return this.nomenclatureRepository.editNomenclature(nomenclature);
  }

  public async deleteNomenclature(id: number): Promise<void> {
    this.nomenclatureRepository.deleteNomenclature(id);
  }
}
