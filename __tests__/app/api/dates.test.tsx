import { RouteLogic } from '../../../app/api/dates/routelogic';

jest.mock('../../../app/lib/prisma.tsx', () => ({
    clips: {
        findMany: jest.fn().mockResolvedValue([
          {
            id: '1',
            name: 'Test Clip1',
            url: 'http://test.com',
            dt: new Date('2023-01-04T12:00:00.000Z'),
          },
        ]),
      },
    dates: {
      findMany: jest.fn().mockResolvedValue([
          {
              id: '1',
              dt: new Date('2022-01-01T00:00:00.000Z'),
                  // other clip properties...
          },
              { 
              id: '2',
              dt: new Date('2022-01-01T00:00:00.000Z'),
              // other clip properties...
              },
          ])
      }
}));


describe('GET /api/dates', () => {
    it('should respond with a formatted list of dates', async () => {

        const response = await RouteLogic();

        expect(response[0]).toEqual({
            clipCount: 1,
            date: "2023-01-04",
            id: 1,
            outageStatus: "",
            source: "SCSO"});
        }
    )
});