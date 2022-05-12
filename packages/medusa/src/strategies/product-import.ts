import { EntityManager } from "typeorm"

import {
  AbstractProductImportStrategy,
  IProductImportStrategy,
} from "../interfaces/product-import-strategy"

class ProductImportStrategy extends AbstractProductImportStrategy {
  private manager_: EntityManager

  constructor({ manager }) {
    super()

    this.manager_ = manager
  }

  withTransaction(manager: EntityManager): IProductImportStrategy {
    if (!manager) {
      return this
    }

    return new ProductImportStrategy({
      manager: manager,
    })
  }
}

export default ProductImportStrategy
