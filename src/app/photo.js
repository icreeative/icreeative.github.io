"use strict";
var Photo = (function () {
    function Photo(id, server, secret, farm) {
        this.id = id;
        this.server = server;
        this.secret = secret;
        this.farm = farm;
        this.selected = false;
    }
    Object.defineProperty(Photo.prototype, "getUrl", {
        get: function () {
            return "https://farm" + this.farm + ".staticflickr.com/" + this.server + "/" + this.id + "_" + this.secret + "_q.jpg";
        },
        enumerable: true,
        configurable: true
    });
    Photo.prototype.toggle = function () {
        this.selected = !this.selected;
    };
    return Photo;
}());
exports.Photo = Photo;
//# sourceMappingURL=photo.js.map