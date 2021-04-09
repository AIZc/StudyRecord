const jwt = require('jsonwebtoken')

// 根据id值, 固定密钥, 有效时间加密生成token
const token = jwt.sign({ id: '123' }, 'secret', { expiresIn: '10 s' })

// 根据固定密钥解密token
const decoded = jwt.decode(token, 'secret')
console.log('-----', decoded)