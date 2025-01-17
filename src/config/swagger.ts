export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'AMC Management API',
    version: '1.0.0',
    description: 'API documentation for AMC Management System',
  },
  servers: [
    {
      url: 'http://localhost:3001/api/v1',
      description: 'Development server',
    },
  ],
  paths: {
    '/auth/login': {
      post: {
        tags: ['Authentication'],
        summary: 'User login',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Login successful',
          },
        },
      },
    },
    '/amc': {
      get: {
        tags: ['AMC'],
        summary: 'Get AMC list',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
          },
          {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: {
            description: 'List of AMC items',
          },
        },
      },
    },
  },
};
