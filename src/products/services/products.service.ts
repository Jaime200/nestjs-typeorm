import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';


@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepo:Repository<Product>){

  }

  findAll() {
    return this.productRepo.find();
  }

  findOne(id: number) {
    const product = this.productRepo.findOne(id)
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateProductDto) {
    const newProduct= new Product();
    newProduct.image = data.image;
    newProduct.name = data.name;
    newProduct.description = data.description;
    newProduct.price = data.price;
    newProduct.stock = data.stock;
    return this.productRepo.save(newProduct);
  }

  // update(id: number, changes: UpdateProductDto) {
  //   const product = this.findOne(id);
  //   const index = this.products.findIndex((item) => item.id === id);
  //   this.products[index] = {
  //     ...product,
  //     ...changes,
  //   };
  //   return this.products[index];
  // }

  // remove(id: number) {
  //   const index = this.products.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`Product #${id} not found`);
  //   }
  //   this.products.splice(index, 1);
  //   return true;
  // }
}
