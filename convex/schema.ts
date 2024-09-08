// convex/schema.ts
export default {
    tables: {
      users: {
        fields: {
          userId: 'string',
          name: 'string',
          email: 'string',
        },
        primaryKey: 'userId',
      },
    },
  };
  