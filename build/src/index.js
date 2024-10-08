"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hi from Node TS");
});
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is up" });
});
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
