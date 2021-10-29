import { Injectable } from '@nestjs/common';
import { MybuyerAddDTO } from './dto/mybuyer.add.dto';
import { MybuyerDeleteDTO } from './dto/mybuyer.delete.dto';
import { MybuyerEditDTO } from './dto/mybuyer.edit.dto';
import { MybuyerRepository } from './repository/mybuyer.repository';
import { Mybuyer } from './schema/mybuyer.schema';

@Injectable()
export class MybuyerService {
    constructor(private mybuyerRepository: MybuyerRepository) {}

    async getAll(): Promise<Mybuyer[]> {
        return await this.mybuyerRepository.getAll();
    }

    async getbyVendor(company_id: string): Promise<Mybuyer[]> {
        return await this.mybuyerRepository.getbyVendor(company_id);
    }

    async getRequestbyVendor(company_id: string): Promise<Mybuyer[]> {
        return await this.mybuyerRepository.getRequestbyVendor(company_id);
    }

    async getbyBuyer(company_id: string, buyer_id: string): Promise<Mybuyer> {
        return await this.mybuyerRepository.getbyBuyer(company_id, buyer_id);
    }

    async create(mybuyer: MybuyerAddDTO): Promise<Mybuyer> {
        return await this.mybuyerRepository.create(mybuyer);
    }

    async update(mybuyer: MybuyerEditDTO): Promise<Mybuyer> {
        return await this.mybuyerRepository.update(mybuyer);
    }

    async delete(mybuyer: MybuyerDeleteDTO): Promise<{}> {
        return await this.mybuyerRepository.delete(mybuyer);
    }
}
