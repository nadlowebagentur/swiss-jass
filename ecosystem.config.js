module.exports = {
  apps : [{
    script: 'node',
    args  : " -r dotenv-defaults/config lib/server/main.js"
  }]
};
