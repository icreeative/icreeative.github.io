"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var flickr_service_1 = require('./flickr.service');
var photo_1 = require('./photo');
var AppComponent = (function () {
    function AppComponent(_flickrService) {
        this._flickrService = _flickrService;
        this.selectedPhoto = [];
        this.photos = [];
    }
    AppComponent.prototype.liveSearch = function (term) {
        var _this = this;
        this.searchText = term;
        this._flickrService.searchPhoto(this.searchText).subscribe(function (data) {
            _this.photos = [];
            if (data.photos) {
                data.photos.photo.forEach(function (photo) {
                    _this.photos.push(new photo_1.Photo(photo.id, photo.server, photo.secret, photo.farm));
                });
            }
        });
    };
    AppComponent.prototype.search = function (photo, photoArray) {
        if (photoArray === void 0) { photoArray = this.selectedPhoto; }
        for (var i = 0; i < photoArray.length; i++) {
            if (photo.id == photoArray[i].id)
                return i;
        }
        return -1;
    };
    AppComponent.prototype.isLocalStorage = function (photo) {
        if (this.search(photo) > -1)
            return true;
        return false;
    };
    AppComponent.prototype.select = function (photo) {
        photo.toggle();
        var i = this.search(photo, this.selectedPhoto);
        if (i > -1) {
            if (!photo.selected) {
                this.selectedPhoto.splice(i, 1);
                localStorage.setItem('photos', JSON.stringify(this.selectedPhoto));
            }
            else {
                this.selectedPhoto.splice(i, 1);
                localStorage.setItem('photos', JSON.stringify(this.selectedPhoto));
            }
        }
        else {
            if (photo.selected) {
                this.selectedPhoto.push(photo);
                localStorage.setItem('photos', JSON.stringify(this.selectedPhoto));
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.selectedPhoto = [undefined, null, ""].indexOf(localStorage["photos"]) != -1 ? [] : JSON.parse(localStorage.getItem('photos'));
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [flickr_service_1.FlickrService]
        }), 
        __metadata('design:paramtypes', [flickr_service_1.FlickrService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map