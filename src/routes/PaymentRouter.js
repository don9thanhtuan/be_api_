const express = require("express");
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config()
// tạo một endpoint 
// khi gửi một yêu cầu GET đến đường dẫn '/config', server sẽ trả về một đối tượng JSON chứa thông tin 
//cấu hình, trong trường hợp này là giá trị của biến môi trường ACCESS_TOKEN.

router.get('/config', (req, res) => {
  return res.status(200).json({
    status: 'OK',
    data: process.env.ACCESS_TOKEN
  })
})


module.exports = router