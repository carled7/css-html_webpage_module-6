const sharp = require('sharp');

let path = process.argv[2];
let width = Number(process.argv[3]);

function resizeImg(path, width){

    sharp(path).resize({width: width, height: 1280}).toFile("./outputImg.jpg", (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Done resizing");
        }
    })
}

resizeImg(path, width);