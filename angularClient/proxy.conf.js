const PROXY_CONFIG = [
    {
        context: [
            "/usuarios",
            "/cart",
            "/productos"
        ],
        target: "http://localhost:3001",
        secure: false
    }
]
module.exports = PROXY_CONFIG;
