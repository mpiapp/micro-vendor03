import { Controller, Post, Body, BadRequestException, Param, Put, Get } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationDTO } from './dto/verification.dto';
import { Verification } from './schema/verification.schema';
import { ApiTags  } from '@nestjs/swagger';
@ApiTags('Verification Module')
@Controller('verification')
export class VerificationController {
    constructor(private readonly verificationService: VerificationService) {}

    @Post()
    async requestVerification(@Body() postBody: VerificationDTO): Promise<Verification> {
      try {
        return await this.verificationService.requestVerification(postBody)
      }
		  catch(exception) {
        throw new BadRequestException([exception.message]); 
      }
	  }

    @Get('/:company_id')
    async getVerificationData(@Param('company_id') id: string): Promise<Verification>  {
      try {
        return await this.verificationService.getVerificationData(id)
      }
      catch(exception) {
        throw new BadRequestException([exception.message]); 
      }
    }
}