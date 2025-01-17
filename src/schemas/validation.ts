import { z } from 'zod';

export const userSchema = z.object({
  first_name: z.string().min(2),
  last_name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  department: z.string().optional(),
  title: z.string().optional(),
  contact_number: z.string().optional(),
  type: z.enum(['U', 'A']).optional(),
  status: z.enum(['A', 'P', 'C']).optional(),
});

export const amcSchema = z.object({
  sort_key: z.string().optional(),
  item: z.string().min(1),
  file: z.string().optional(),
  summary_field: z.string().optional(),
  lru_pn_name: z.string().optional(),
  vendor: z.string().min(1),
  aircraft: z.string().min(1),
  ipc_ata: z.string().optional(),
  from: z.string().optional(),
  section: z.string().optional(),
});
