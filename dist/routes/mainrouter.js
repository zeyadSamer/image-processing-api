"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const imageprocessing_1 = require("../imageprocessing");
const routes = express_1.default.Router();
//main functions
routes.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //storing image parameters
    const queryWidth = req.query.width;
    const queryHeight = req.query.height;
    const outputFileName = req.query.filename;
    //checking dimensions given by the user
    //checking missing data
    if (outputFileName === undefined ||
        queryHeight === undefined ||
        queryWidth === undefined) {
        res.send('error: please write the filename and correct dimensions');
    }
    //checking invalid inputs
    else if (isNaN(queryWidth) ||
        isNaN(queryHeight)) {
        res.send('error: please check your query input');
    }
    //check if outputfile exist
    else if (!fs_1.default.existsSync(`./full/${outputFileName}.jpg`)) {
        //this file is not found
        res.sendStatus(404);
    }
    else {
        const newWidth = parseInt(queryWidth, 10);
        const newHeight = parseInt(queryHeight, 10);
        //checking unreal dimensions after parsing
        if (newWidth <= 0 || newHeight <= 0) {
            res.send('error : non positive dimensions are not valid');
        }
        //check if the outfile exist in public-->no processing
        else if (!fs_1.default.existsSync(`./public/${outputFileName}_${newWidth}_${newHeight}.jpg`)) {
            yield (0, imageprocessing_1.editImage)(`./full/${outputFileName}.jpg`, outputFileName, newWidth, newHeight);
            //renaming edited file
            res.sendFile(path_1.default.resolve(`./public/${outputFileName}_${newWidth}_${newHeight}.jpg`));
        }
        else {
            //send the file without processing again
            res.sendFile(path_1.default.resolve(`./public/${outputFileName}_${newWidth}_${newHeight}.jpg`));
        }
    }
}));
exports.default = routes;
