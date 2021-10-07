import { companyDetail } from './data.mock';

  const RepositoryMock = {
    create: (dto) => {
      if(JSON.stringify(dto) !== JSON.stringify(companyDetail)) {
        throw new Error('Test Error');
      }
      return dto;
    },
    find: () => {
      return companyDetail;
    },
    findById: ({ _id: id }) => {
      if(companyDetail._id !== id) {
        throw new Error('Test Error');
      }

      return companyDetail;
    },
    findOne: jest.fn((data) => ({
      sort: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      limit:jest.fn(() => {
        if(data.company_code.$regex === companyDetail.company_code.substr(0,3)) {
          return companyDetail;
        }
        return null;
      }),
  })),
    findOneAndUpdate: ({ _id: id }, companyDetailEditDTO) => {
      if(companyDetail._id !== id) {
        throw new Error('Test Error');
      }
      
      return companyDetailEditDTO;
    },
  };
  
  export { RepositoryMock }
