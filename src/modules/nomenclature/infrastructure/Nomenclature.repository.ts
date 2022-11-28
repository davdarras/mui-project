import { deleteRequest, getRequest } from "modules/core/utils/fetch";
import { postRequestMultiPart } from "modules/core/utils/fetch/fetcher";
import { NomenclatureRepositoryType } from "../application/INomenclatureRepository";
import { Nomenclature } from "../domain";

export default class NomenclatureRepository
  implements NomenclatureRepositoryType
{
  constructor(private apiUrl: string) {}

  public async getNomenclatures(): Promise<Nomenclature[]> {
    return getRequest<Nomenclature[]>(this.apiUrl + "/nomenclatures");
  }

  public async getNomenclature(id: number): Promise<Nomenclature> {
    return getRequest<Nomenclature>(this.apiUrl + "/nomenclatures/" + id);
  }

  public async addNomenclature(
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ): Promise<Nomenclature> {
    const formData = new FormData();
    const json = new Blob([JSON.stringify(nomenclature)], {
      type: "application/json",
    });
    formData.append("nomenclature", json, "");
    if (dictionaryFile !== undefined) {
      formData.append("dictionaryFile", dictionaryFile);
    }

    return postRequestMultiPart<Nomenclature>(
      this.apiUrl + "/nomenclatures/add",
      formData
    );
  }

  public async editNomenclature(
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ): Promise<Nomenclature> {
    const formData = new FormData();
    const json = new Blob([JSON.stringify(nomenclature)], {
      type: "application/json",
    });
    formData.append("nomenclature", json, "");
    if (dictionaryFile !== undefined) {
      formData.append("dictionaryFile", dictionaryFile);
    }
    return postRequestMultiPart<Nomenclature>(
      this.apiUrl + "/nomenclatures/" + nomenclature.id,
      formData
    );
  }

  public async deleteNomenclature(id: number): Promise<void> {
    deleteRequest<void>(this.apiUrl + "/nomenclatures/" + id + "/delete");
  }
}
