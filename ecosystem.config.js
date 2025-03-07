module.exports = {
  apps: [
    {
      name: 'unify-server',
      script: 'server/index.ts',
      interpreter: 'bun',
      args: '--port 5000',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'unify-client',
      script: 'serve',
      args: '-s client/dist -l 5173',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}; 