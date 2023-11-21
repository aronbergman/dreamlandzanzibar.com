module.exports = {
    apps: [
        {
            name: 'dreamlandzanzibar.front',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            instances: 4,
            exec_mode: 'cluster',
            watch: false,
            max_memory_restart: '1000M',
            env_prod: {
                NODE_ENV: 'production'
            }
        }
    ]
}