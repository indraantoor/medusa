import { EntityManager } from "typeorm"

export interface IProductImportStrategy {
  withTransaction(manager: EntityManager): IProductImportStrategy
}

export abstract class AbstractProductImportStrategy
  implements IProductImportStrategy
{
  public abstract withTransaction(
    manager: EntityManager
  ): IProductImportStrategy
}
