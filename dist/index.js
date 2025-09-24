"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.initModels = initModels;
const user_model_1 = require("./user.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_model_1.User; } });
function initModels(sequelize) {
    const models = {
        User: user_model_1.User,
    };
    return models;
}
