"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
;
const sharp_1 = __importDefault(require("sharp"));
const routes = express_1.default.Router();
//helper functions
const editImage = (inputFilepath, width, height) => {
    (0, sharp_1.default)(inputFilepath)
        .resize(width, height)
        .toFile('../../images/outputImage/out.jpg');
};
//main functions
routes.get('/images', (req, res) => {
    //res.send('here you can view the image');
    //storing image parameters
    let queryWidth = req.query.width;
    let queryHeight = req.query.height;
    let outputFileName = req.query.filename;
    let newWidth = parseInt(queryWidth, 10);
    let newHeight = parseInt(queryHeight, 10);
    //check file name,filename determines which image to send to the browser
    if (outputFileName === 'encenadaport') {
        editImage('../../images/encenadaport', newWidth, newHeight);
    }
    else if (outputFileName === 'fjord') {
        editImage('../../images/fjord', newWidth, newHeight);
    }
    else if (outputFileName === 'icelandwaterfall') {
        editImage('../../images/icelandwaterfall', newWidth, newHeight);
    }
    else if (outputFileName === 'palmtunnel') {
        editImage('../../images/palmtunnel', newWidth, newHeight);
    }
    else if (outputFileName === 'santamonica') {
        editImage('../../images/santamonica', newWidth, newHeight);
    }
    res.sendFile(`../../images/outputimage/processedimage.jpg`);
});
exports.default = routes;
