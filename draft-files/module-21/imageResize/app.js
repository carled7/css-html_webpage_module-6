const sharp = require('sharp');
const compress_images = require("compress-images");
//const fs = require('fs');

let path = process.argv[2];
let width = Number(process.argv[3]);

function resizeImg(path, width){

    sharp(path).resize({width: width, height: 1280}).toFile("./outputImg.jpg", (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Done resizing");
            compressImg("./outputImg.jpg", "./compressedImg.jpg");
        }
    })
}


function compressImg(inputPath, outputPath){
    compress_images(inputPath, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
                    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
                    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
                    { svg: { engine: "svgo", command: "--multipass" } },
                    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
    function (error, completed, statistic) {
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");
    }
    )
}

resizeImg(path, width);
