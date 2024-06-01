import { RouteLogic } from '../../../app/api/latest-clip/routelogic'; // route logic

jest.mock('../../../app/lib/prisma.tsx', () => ({
    clips: {
      findFirst: jest.fn().mockResolvedValue(
        {
          id: '2',
          name: 'Test Clip2',
          url: 'http://test.com',
          dt: new Date('2023-01-05T12:00:00.000Z'),
        },
      ),
    }
  }
));

describe('GET /api/latest-clip', () => {
    it('should respond with the row of the latest clip ISO 8601', async () => {
      // Call the route logic function
      const response = await RouteLogic();

      expect(response).toEqual({
          "date": "2023-01-05T12:00:00.000Z"
      });
  });
});