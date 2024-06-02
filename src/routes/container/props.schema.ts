import z from 'zod';

export const schema = z.object({
  xAxis: z.boolean({
    description: 'Whether to add horizontal padding.',
  }),
  yAxis: z.boolean({
    description: 'Whether to add vertical padding.',
  }),
});
