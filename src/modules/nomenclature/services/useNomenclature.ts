import { useState } from "react";
import NomenclatureService from "../application/Nomenclature.service";
import { Nomenclature } from "../domain";
import NomenclatureRepository from "../infrastructure/Nomenclature.repository";

const nomenclatureRepository = new NomenclatureRepository(
  "http://localhost:8080/api/nomenclatures"
);
const nomenclatureService = new NomenclatureService(nomenclatureRepository);

export default function useNomenclature() {
  const [nomenclatures, setNomenclatures] = useState<Nomenclature[]>();
  const [nomenclature, setNomenclature] = useState<Nomenclature>();

  const getNomenclatures = () => {
    nomenclatureService
      .getNomenclatures()
      .then((nomenclaturesData) => setNomenclatures(nomenclaturesData));
  };

  const getNomenclature = (id: number) => {
    nomenclatureService
      .getNomenclature(id)
      .then((nomenclatureData) => setNomenclature(nomenclatureData));
  };

  const editNomenclature = (nomenclature: Nomenclature) => {
    nomenclatureService
      .editNomenclature(nomenclature)
      .then((nomenclatureData) => setNomenclature(nomenclatureData));
  };

  const addNomenclature = (nomenclature: Nomenclature) => {
    nomenclatureService
      .addNomenclature(nomenclature)
      .then((nomenclatureData) => setNomenclature(nomenclatureData));
  };

  const deleteNomenclature = (id: number) => {
    nomenclatureService.deleteNomenclature(id);
  };

  return {
    nomenclature,
    nomenclatures,
    getNomenclatures,
    getNomenclature,
    editNomenclature,
    addNomenclature,
    deleteNomenclature,
  };
}
