const router = require("express").Router();
const nodemailer = require('nodemailer');
  
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'charliepoots0722@gmail.com',
      pass: 'aHnDoNg92'
    }
  })
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

router.post('/sendMail', (req,res) => {
    var bodyContent = `${req.body.address} \n${req.body.name} \n${req.body.subject}`
    let mail = {
        from: req.body.name,
        to: 'AlbertKim0722@gmail.com',
        from: req.body.address,
        subject: req.body.subject,
        text: bodyContent
    }

    transporter.sendMail(mail, (err, data) => {
        if(err) {
            console.log(JSON.stringify(err));
            res.json({
                msg:'fail'
            })
        } else {
            res.json({
                msg:'success'
            })
        }
    })
})


module.exports = router;