/** @type {import('next').NextConfig} */

const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: 'zaki',
    mongodb_password: 'zaki123',
    mongodb_cluster: 'cluster0',
    
  }
}

module.exports = (phase) => {
  if(phase == PHASE_DEVELOPMENT_SERVER){
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'zaki',
        mongodb_password: 'zaki123',
        mongodb_cluster: 'cluster0',
        
      }
    }
  }

  return {
    reactStrictMode: true,
      env: {
        mongodb_username: 'zaki',
        mongodb_password: 'zaki123',
        mongodb_cluster: 'cluster0',
        
      }
  }
}
