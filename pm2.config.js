module.exports = {
  apps : [{
name   : "dreamlandzanzibar.com",
script : "npx",
env_production: {
  NODE_ENV: "production"
},
env_development: {
  NODE_ENV: "development"
},
args   : "serve -s build -l 3010"
  }]
}
