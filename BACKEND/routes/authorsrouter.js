var exp = require('express');
const router = exp.Router();    
var bodyparser = require('body-parser');
var authors = require('../model/authorsmodel');
const path = require('path');
router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());

var multer = require('multer'); //module to upload files

var storage =   multer.diskStorage({  
    destination: (req, file, callback)=>{  
      callback(null, './public/images');  
    },  
    filename: (req, file, callback)=>{  
      callback(null, file.originalname);  
    }  
  });  
  
var upload = multer({ storage : storage}).single('bimage');
router.get("/getauthors",(req,res)=>{
    authors.find({},(err,result)=>{
        if (err) throw err;
        else res.send(result)
    }) 
})
router.post("/addauthor", upload, (req,res)=>{
    if(req.body.authorTitle!=undefined){
        var b1 = new authors(req.body);
        b1.save((err)=>{
            if (err) throw err;
            else res.send({msg:"Added"});
        });
    }
})

router.get("/view/:img",(req,res)=>{        //image controller
    res.sendFile(path.join(__dirname+"../../public/images/"+req.params.img));
})


router.post("/editauthor", upload, (req,res)=>{
    authors.updateOne({authorTitle:req.body.authorTitle} ,{$set:{
        authorTitle:req.body.authorTitle,
        book : req.body.book,
        genre : req.body.genre,
        description : req.body.description,
        urlToImage : req.body.file
    }}, (err,result)=>{
        if (err) throw err;
        else res.send({msg:"Updated"});
    }) 
})

router.get("/deleteauthor/:bid",(req,res)=>{
    authors.deleteOne({authorTitle:req.params.bid},(err,result)=>{
        if (err) throw err;
        else
        {
            authors.find({},(err,result)=>{
                if(err) throw err;
                else res.send(result);
            })
        }
    })
})

router.get("/:id",(req,res)=>{
    authors.find({authorTitle: req.params.id},(err,result)=>{
        if (err) throw err;
        else res.send(result[0])
    })
})


module.exports=router;