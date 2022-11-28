import { makeApiUrl } from "modules/core/factory/http";
import { NomenclatureRepositoryType } from "../application/INomenclatureRepository";
import NomenclatureUseCase from "../application/usecases/NomenclatureUseCase";
import NomenclatureRepository from "../infrastructure/Nomenclature.repository";

export const makeNomenclatureRepository = (): NomenclatureRepositoryType =>
  new NomenclatureRepository(makeApiUrl());

export const makeNomenclatureUseCase = (): NomenclatureUseCase =>
  new NomenclatureUseCase(makeNomenclatureRepository());
