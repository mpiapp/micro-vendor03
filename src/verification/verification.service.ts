import { Injectable } from '@nestjs/common';
import { VerificationAddDTO } from './dto/verification.add.dto';
import { VerificationRepository } from './repository/verification.repository';
import { Verification } from './schema/verification.schema';

@Injectable()
export class VerificationService {
    constructor(private verificationRepository: VerificationRepository) { }

    async create(verification: VerificationAddDTO): Promise<Verification> {
        return await this.verificationRepository.create(verification)
    }
}
