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
    nomenclature: Nomenclature
  ): Promise<Nomenclature> => {
    return saveNomenclature(nomenclature, "/nomenclatures/add");
  };

  const editNomenclature = async (
    nomenclature: Nomenclature
  ): Promise<Nomenclature> => {
    return saveNomenclature(nomenclature, "/nomenclatures/" + nomenclature.id);
  };

  const saveNomenclature = async (
    nomenclature: Nomenclature,
    path: string
  ): Promise<Nomenclature> => {
    const formData = new FormData();
    const nomenclatureData = { ...nomenclature };
    delete nomenclatureData.dictionaryFile;

    const json = new Blob([JSON.stringify(nomenclatureData)], {
      type: "application/json",
    });
    formData.append("nomenclature", json, "");

    if (
      nomenclature.dictionaryFile !== undefined &&
      nomenclature.dictionaryFile.length > 0
    ) {
      formData.append("dictionaryFile", nomenclature.dictionaryFile[0]);
    }

    return postRequestMultiPart<Nomenclature>(apiUrl + path, formData);
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
