import { companyDetail } from './mock.data';

export class MockCompanyModel {

    static create = jest.fn().mockImplementation((dto) => {

      if(JSON.stringify(dto) !== JSON.stringify(companyDetail)) {
        throw new Error('Test Error');
        
      }

      return dto;
    });
  }