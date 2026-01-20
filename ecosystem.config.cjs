module.exports = {
  apps: [
    {
      name: "mvp-markdown",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      interpreter: "node",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
