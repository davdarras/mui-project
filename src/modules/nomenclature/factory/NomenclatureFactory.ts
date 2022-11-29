import { makeApiUrl } from "modules/core/factory/http";
import { NomenclatureRepositoryType } from "../application/NomenclatureRepositoryType";
import {
  createNomenclatureUseCase,
  NomenclatureUseCaseType,
} from "../application/usecases/NomenclatureUseCase";
import { createNomenclatureRepository } from "../infrastructure/NomenclatureRepository";

export const makeNomenclatureRepository = (): NomenclatureRepositoryType =>
  createNomenclatureRepository(makeApiUrl());

export const makeNomenclatureUseCase = (): NomenclatureUseCaseType =>
  createNomenclatureUseCase(makeNomenclatureRepository());
