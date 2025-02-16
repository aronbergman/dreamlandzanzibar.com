module.exports = {
    apps: [
        {
            name: 'front.dreamlandzanzibar.com',
            script : "npx",
            // instances: 4,
            exec_mode: 'fork',
            watch: false,
            max_memory_restart: '1000M',
            env_prod: {
                NODE_ENV: 'production'
            },
            args: 'npx serve@latest out -p 3010',
        }
    ]
}