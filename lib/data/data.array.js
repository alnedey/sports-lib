"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var data_bare_1 = require("./data.bare");
var DataArray = /** @class */ (function (_super) {
    __extends(DataArray, _super);
    function DataArray(value) {
        var _this = this;
        if (!Array.isArray(value)) {
            throw new Error('Only arrays are allowed for string data');
        }
        _this = _super.call(this, value) || this;
        _this.value = value;
        return _this;
    }
    DataArray.prototype.getValue = function () {
        return this.value;
    };
    return DataArray;
}(data_bare_1.DataBare));
exports.DataArray = DataArray;