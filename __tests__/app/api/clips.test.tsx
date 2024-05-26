import { Clips } from '../../../app/api/clips/clips'; // route logic

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
    }
  }
));

describe('GET /api/clips', () => {
    it('should respond with a formatted list of clips', async () => {

        const response = await Clips();

        expect(response[0]).toEqual({
            date: "1/4/2023",
            id: "1",
            name: "Test Clip1",
            source: "Sanders County Sheriff's Office",
            time: "5:00 AM",
            url: "http://test.com",});
    });
});