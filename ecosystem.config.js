module.exports = {
    apps: [
      {
        name: 'check-links',
        script: 'server.js',
        watch: false,
        autorestart: false,
        wait_ready: true,
        noDaemonMode: true,
        exec_mode: 'cluster', 
        instances: 'max',
      },
    ],
  };