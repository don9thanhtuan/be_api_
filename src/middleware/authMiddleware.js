//File middleware trong đoạn mã JavaScript trên được sử dụng để thực hiện 
//xác thực người dùng (authentication) trước khi cho phép họ truy cập vào các tài nguyên hoặc thực hiện các 
//hành động nhất định trong ứng dụng web.

const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
// Middleware trích xuất token từ tiêu đề yêu cầu (header) và sau đó sử dụng JWT để xác minh tính hợp lệ của token đó.
const authMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
        if (user?.isAdmin) {
            next()
        } else {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
    });
}

const authUserMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    const userId = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
        if (user?.isAdmin || user?.id === userId) {
            next()
        } else {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
    });
}

module.exports = {
    authMiddleWare,
    authUserMiddleWare
}