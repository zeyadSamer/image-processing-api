"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainrouter_1 = __importDefault(require("./routes/mainrouter"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', mainrouter_1.default);
app.listen(port, () => {
    console.log(`server running on http://localhost:${3000}`);
});
//exporting app for testing
exports.default = app;
