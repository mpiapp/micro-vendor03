import { Body, Controller, BadRequestException, Param, Post, Put, UsePipes, ValidationPipe, Get, NotFoundException } from '@nestjs/common';
import { CompanyService } from './company.service';
import { companyDetailAddDTO } from './dto/company.detail.add.dto';
import { companyDetailEditDTO } from './dto/company.detail.edit.dto';
import { Company } from './schema/company.schema';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get()
    async getAllCompany(): Promise<Company[]> {
		  const getAllCompany = await this.companyService.getAllCompany();
		  return getAllCompany;
	  }

    @Get('/:id')
    async getCompanyDetail(@Param('id') id: string): Promise<Company> {
		  const getCompanyDetail = await this.companyService.getCompanyDetail(id);
      if(!getCompanyDetail._id) {
        throw new NotFoundException()
      }
		  return getCompanyDetail;
	  }

    @Post()
    async addCompanyDetail(@Body() companyDetailAdd: companyDetailAddDTO): Promise<Company> {
		  const addCompany =  await this.companyService.addCompanyDetail(companyDetailAdd);
      if(!addCompany._id) {
        throw new BadRequestException(addCompany);
      }
      return addCompany;
	  }

    @Put('/:id')
	  @UsePipes(ValidationPipe)
	  async editCompanyDetail(@Param('id') id: string, @Body() companyDetailEdit: companyDetailEditDTO): Promise<Company> {
		  const editCompany = await this.companyService.editCompanyDetail(id, companyDetailEdit);
      if(!editCompany._id) {
        throw new BadRequestException(editCompany)
      }
		  return editCompany;
	  }
}