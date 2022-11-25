import {
  deleteRequest,
  getRequest,
  postRequest,
} from "modules/core/utils/fetch";
import { NomenclatureRepositoryInterface } from "../application/Nomenclature.repository.interface";
import { Nomenclature } from "../domain";

export default class NomenclatureRepository
  implements NomenclatureRepositoryInterface
{
  constructor(private apiUrl: string) {}

  public async getNomenclatures(): Promise<Nomenclature[]> {
    return getRequest<Nomenclature[]>(this.apiUrl + "/nomenclatures");
  }

  public async getNomenclature(id: number): Promise<Nomenclature> {
    return getRequest<Nomenclature>(this.apiUrl + "/nomenclatures/" + id);
  }

  public async addNomenclature(
    nomenclature: Nomenclature
  ): Promise<Nomenclature> {
    return postRequest<Nomenclature>(
      this.apiUrl + "/nomenclatures/add",
      nomenclature
    );
  }

  public async editNomenclature(
    nomenclature: Nomenclature
  ): Promise<Nomenclature> {
    return postRequest<Nomenclature>(
      this.apiUrl + "/nomenclatures/" + nomenclature.id,
      nomenclature
    );
  }

  public async deleteNomenclature(id: number): Promise<void> {
    deleteRequest<void>(this.apiUrl + "/nomenclatures/" + id + "/delete");
  }
}
