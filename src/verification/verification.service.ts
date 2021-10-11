import { Injectable } from '@nestjs/common';
import { VerificationDTO } from './dto/verification.dto';
import { VerificationRepository } from './repository/verification.repository';
import { Verification } from './schema/verification.schema';

@Injectable()
export class VerificationService {
    constructor(private verificationRepository: VerificationRepository) { }

    async requestVerification(verificationData: VerificationDTO): Promise<Verification> {
        return await this.verificationRepository.createOrUpdate(verificationData)
    }

    async getVerificationData(id: string): Promise<Verification> {
        return await this.verificationRepository.getVerificationData(id)
    }
}
