const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'a 32 bits long secret'
const PASSWORD =  process.env.PASSWORD
const USERNAME = process.env.USERNAME

const TIME_TO_EXPIRES = 60 * 60 * 24


function authMiddleware(req, res, next) {
    const headerAuth = req.headers['authorization']
    const token = extractToken(headerAuth)

    if (!token) return res.sendStatus(401)

    try {
        const decode = jwt.verify(token, JWT_SECRET)
        if (decode) {
            res.locals.token = decode
            return next()
        }
    } catch (error) {
        console.error(error)
    } headerAuth

    return res.sendStatus(401)
}

function doLogin(req, res) {
    const { login, senha } = req.body
    if (checkLogin(login, senha)) {
        const token = jwt
            .sign({}, JWT_SECRET, {})

        return res.json(token)
    }
    return res.sendStatus(401)
}

function extractToken(authentication) {
    const token = authentication.split(' ')
    if (token[0] === "Bearer")
        return token[1]
}


// Função mocada para evitar a criação de uma segunda tabela com um unico indice
function checkLogin(login, senha) {
    // Deve-se verificar a senha depois de encriptada, pois assim será salva no banco.
    return login === USERNAME && senha === PASSWORD
}

module.exports = { doLogin, authMiddleware }



