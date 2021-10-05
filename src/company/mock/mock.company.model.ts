import { companyDetail } from './mock.data';

  const MockCompanyModel = {
    create: (dto) => {
      if(JSON.stringify(dto) !== JSON.stringify(companyDetail)) {
        throw new Error('Test Error');
        
      }
      return dto;
    },
    find: () => {
      return companyDetail;
    },
    sort: () => {
      return companyDetail;
    },
    limit: () => {
      return companyDetail;
    },
  };
  
  export { MockCompanyModel }