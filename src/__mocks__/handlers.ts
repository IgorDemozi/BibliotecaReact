import { rest } from 'msw';
import { Usuario } from 'types';

export const handlers = [
   rest.post('http://localhost:3000/login', async (req, res, ctx) => {
      const body: Usuario = await req.json();

      const login = [
         {
            email: 'admin@admin.com.br',
            password: 'admin123',
         },
         {
            email: 'gustavo@gmail.com',
            password: 'gustavokunde',
         },
         {
            email: 'gx2tecnologia@gx2.com.br',
            password: 'gx2@123',
         },
      ];

      const validar = login.find(item => item.email === body.email && item.password === body.password);

      if (!validar) {
         return res(ctx.json({ error: 'Usuário ou senha inválidos' }));
      } else {
         return res(ctx.status(200), ctx.json({ auth: true }));
      }
   }),

   rest.get('http://localhost:3000/books', async (req, res, ctx) => {
      return res(ctx.status(200));
   }),
];
