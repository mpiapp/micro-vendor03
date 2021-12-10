import { Body, Controller, BadRequestException, Param, Post, Put, Get, HttpStatus } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { vendorRegisterDTO } from './dto/vendor.register.dto';
import { vendorDetailAddDTO } from './dto/vendor.detail.add.dto';
import { vendorDetailEditDTO } from './dto/vendor.detail.edit.dto';
import { Vendor } from './schema/vendor.schema';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('vendor')
export class VendorController {
    constructor(private readonly vendorService: VendorService) {}
  
    @MessagePattern('vendor.register')
    async registerVendor(@Payload() payload: any): Promise<any>{

      let vendorData: any = {
        name: payload.value.company_name
      };

      try {
        let data =  await this.vendorService.registerVendor(vendorData);
        
        return {
          status: HttpStatus.OK,
          message: "success register vendor",
          data: data,
          errors: null
        }
      }
      catch(error) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: "error",
          data: null,
          errors: error.message
        };
      }
    } 


    @MessagePattern('vendor.detail')
	  async addVendorDetail(@Payload() payload: any): Promise<any> {
      
      try {
        let vendorDetail =  await this.vendorService.AddCompanyDetail(payload.value);
      
        return {
          status: HttpStatus.OK,
          message: "success add company detail",
          data: vendorDetail,
          errors: null
        };
      }
      catch(error) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: "error",
          data: null,
          errors: error.message
        };
      }
     
	  }


    @MessagePattern('vendor.legal')
	  async addVendorDocs(@Payload() payload: any): Promise<any> {

      try {
        let legalDocs = await this.vendorService.AddLegalDocs(payload.value);

        return {
          status: HttpStatus.OK,
          message: "success add legal docs",
          data: legalDocs,
          errors: null
        };
      }
      catch(error) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: "error",
          data: null,
          errors: error.message
        };
      }


	  }

    @MessagePattern('vendor.get.all')
    async getAllVendor(@Payload() payload: any): Promise<Vendor[]> {
		  return await this.vendorService.getAllVendor(payload.value.page, payload.value.limit);
	  }

    @MessagePattern('vendor.get.detail')
    async getCompanyDetail(@Payload() payload: any): Promise<any> {
      try {
        console.log(payload.value._id);
        let vendorDetail = await this.vendorService.getCompanyDetail(payload.value._id);

        return {
          status: HttpStatus.OK,
          message: "success get vendor",
          data: vendorDetail,
          errors: null
        }
      }
      catch(error) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: "error",
          data: null,
          errors: error.message
        };
      }
      
      
	  }

    @Post()
    async addCompanyDetail(@Body() companyDetailAdd: vendorDetailAddDTO): Promise<Vendor> {
      try {
        return await this.vendorService.addVendorDetail(companyDetailAdd);
      }
		  catch(exception) {
        throw new BadRequestException([exception.message]); 
      }
	  }
}