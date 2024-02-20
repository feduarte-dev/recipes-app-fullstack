"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meals_route_1 = require("./meals.route");
const router = (0, express_1.Router)();
router.use('/meals', meals_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map