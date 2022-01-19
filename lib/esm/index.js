"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "QueryService", {
  enumerable: true,
  get: function () {
    return _QueryService.default;
  }
});
exports.extract = extract;

var _QueryService = _interopRequireDefault(require("./QueryService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extract(jsonld, uri) {
  return Object.assign({}, ...jsonld.filter(i => i["@id"] === uri));
}
//# sourceMappingURL=index.js.map