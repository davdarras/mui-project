import { deleteRequest, getRequest } from "modules/core/utils/fetch";
import { postRequestMultiPart } from "modules/core/utils/fetch/fetcher";
import { NomenclatureRepositoryType } from "../application/NomenclatureRepositoryType";
import { Nomenclature } from "../application/domain";

export function createNomenclatureRepository(
  apiUrl: string
): NomenclatureRepositoryType {
  const getNomenclatures = async (): Promise<Nomenclature[]> => {
    return getRequest<Nomenclature[]>(apiUrl + "/nomenclatures");
  };

  const getNomenclature = async (id: number): Promise<Nomenclature> => {
    return getRequest<Nomenclature>(apiUrl + "/nomenclatures/" + id);
  };

  const addNomenclature = async (
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ): Promise<Nomenclature> => {
    const formData = new FormData();
    const json = new Blob([JSON.stringify(nomenclature)], {
      type: "application/json",
    });
    formData.append("nomenclature", json, "");
    if (dictionaryFile !== undefined) {
      formData.append("dictionaryFile", dictionaryFile);
    }

    return postRequestMultiPart<Nomenclature>(
      apiUrl + "/nomenclatures/add",
      formData
    );
  };

  const editNomenclature = async (
    nomenclature: Nomenclature,
    dictionaryFile?: File
  ): Promise<Nomenclature> => {
    const formData = new FormData();
    const json = new Blob([JSON.stringify(nomenclature)], {
      type: "application/json",
    });
    formData.append("nomenclature", json, "");
    if (dictionaryFile !== undefined) {
      formData.append("dictionaryFile", dictionaryFile);
    }
    return postRequestMultiPart<Nomenclature>(
      apiUrl + "/nomenclatures/" + nomenclature.id,
      formData
    );
  };

  const deleteNomenclature = async (id: number): Promise<void> => {
    deleteRequest<void>(apiUrl + "/nomenclatures/" + id + "/delete");
  };

  return {
    getNomenclatures,
    getNomenclature,
    addNomenclature,
    deleteNomenclature,
    editNomenclature,
  };
}
