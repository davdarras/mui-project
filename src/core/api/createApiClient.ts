import { getRequest } from "modules/core/utils/fetch";
import { postRequest } from "modules/core/utils/fetch";
import { deleteRequest } from "modules/core/utils/fetch";
import { Nomenclature } from "modules/nomenclature/domain";

export type ApiClientType = {
  getNomenclatures: () => Promise<Nomenclature[]>;
  getNomenclature: (id: number) => Promise<Nomenclature>;
  addNomenclature: (nomenclature: Nomenclature) => Promise<void>;
  deleteNomenclature: (id: number) => Promise<void>;
};

export const createApiClient = (apiUrl: string): ApiClientType => {
  return {
    getNomenclatures: async () =>
      getRequest<Promise<Nomenclature[]>>(`${apiUrl}/nomenclatures`),
    getNomenclature: async (id: number) =>
      getRequest<Promise<Nomenclature>>(`${apiUrl}/nomenclatures/${id}`),
    addNomenclature: async (nomenclature: Nomenclature) =>
      postRequest<Promise<void>>(`${apiUrl}/nomenclatures`, nomenclature),
    deleteNomenclature: async (id: number) =>
      deleteRequest<Promise<void>>(`${apiUrl}/nomenclatures/${id}/delete`),
  };
};
