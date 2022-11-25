import NomenclatureService from "../application/Nomenclature.service";
import { Nomenclature } from "../domain";
import NomenclatureRepository from "../infrastructure/Nomenclature.repository";

const nomenclatureRepository = new NomenclatureRepository(
  "http://localhost:8080/api"
);
const nomenclatureService = new NomenclatureService(nomenclatureRepository);

export default function useNomenclature() {
  const getNomenclatures = () => {
    return nomenclatureService.getNomenclatures();
  };

  const getNomenclature = (id: number) => {
    return nomenclatureService.getNomenclature(id);
  };

  const editNomenclature = (nomenclature: Nomenclature) => {
    return nomenclatureService.editNomenclature(nomenclature);
  };

  const addNomenclature = (nomenclature: Nomenclature) => {
    return nomenclatureService.addNomenclature(nomenclature);
  };

  const deleteNomenclature = (id: number) => {
    return nomenclatureService.deleteNomenclature(id);
  };

  return {
    getNomenclatures,
    getNomenclature,
    editNomenclature,
    addNomenclature,
    deleteNomenclature,
  };
}
