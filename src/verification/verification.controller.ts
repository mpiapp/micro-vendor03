import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationAddDTO } from './dto/verification.add.dto';
import { Verification } from './schema/verification.schema';
import { ApiTags  } from '@nestjs/swagger';

@ApiTags('Verification Controller')
@Controller('verification')
export class VerificationController {
    constructor(private readonly verificationService: VerificationService) {}

    @Post()
    async addCompanyDetail(@Body() verification: VerificationAddDTO): Promise<Verification> {
      try {
        return await this.verificationService.create(verification);
      }
		  catch(exception) {
        throw new BadRequestException([exception.message]); 
      }
	  }
}
