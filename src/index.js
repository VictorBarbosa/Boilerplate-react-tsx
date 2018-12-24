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
require("./index.css");
var React = require("react");
var Ola = /** @class */ (function (_super) {
    __extends(Ola, _super);
    function Ola(props) {
        return _super.call(this, props) || this;
    }
    Ola.prototype.render = function () {
        return (React.createElement("div", { className: "Banzinga Voila" }, "The component is here"));
    };
    return Ola;
}(React.Component));
exports.default = Ola;
