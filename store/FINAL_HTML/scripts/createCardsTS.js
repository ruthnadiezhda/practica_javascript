"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCard = void 0;
var createCard = function (product) {
    return "\n        <article class=\"product-card\">\n            <a class=\"product-link\" href=\"details.html?id=".concat(product.id, "\">\n                <img class=\"product-img\" src=\"").concat(product.images[0], "\" alt=\"").concat(product.title, "\" />\n                <div class=\"product-info\">\n                    <span class=\"product-title\">").concat(product.title, "</span>\n                    <span class=\"product-description\">").concat(product.description, "</span>\n                    <div class=\"product-price-block\">\n                        <span class=\"price\">S/").concat(product.price, "</span>\n                        <span class=\"discount\">").concat(product.onsale, "% Off</span>\n                    </div>\n                    <div class=\"product-tax-policy\">").concat(product.colors.join(', '), "</div>\n                </div>\n            </a>\n        </article>\n    ");
};
exports.createCard = createCard;
