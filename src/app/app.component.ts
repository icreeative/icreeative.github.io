import { Component, OnInit } from '@angular/core';
import { FlickrService } from './flickr.service';
import { Photo } from './photo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlickrService]
})
export class AppComponent implements OnInit {
  searchText: string;
  selectedPhoto: Array<Photo> = [];
  photos: Array<Photo> = [];

  constructor(private _flickrService: FlickrService) {
  }

  liveSearch(term: string) {
    this.searchText = term;
    this._flickrService.searchPhoto(this.searchText).subscribe(data => {
      this.photos = [];
      if (data.photos) {
        data.photos.photo.forEach((photo: any) => {
          this.photos.push(new Photo(
            photo.id,
            photo.server,
            photo.secret,
            photo.farm));
        })
      }
    }
    )
  }

  search(photo: Photo, photoArray: Array<Photo> = this.selectedPhoto) {
    for (let i = 0; i < photoArray.length; i++) {
      if (photo.id == photoArray[i].id)
        return i;
    }
    return -1;
  }

  isLocalStorage(photo: Photo){
    if( this.search(photo) > -1) return true;
    return false;
  }

  select(photo: Photo) {
    photo.toggle();
    let i = this.search(photo, this.selectedPhoto);
    if (i > -1) {
      if (!photo.selected) {
        this.selectedPhoto.splice(i, 1);
        localStorage.setItem('photos', JSON.stringify(this.selectedPhoto));
      }else {
        this.selectedPhoto.splice(i, 1);
        localStorage.setItem('photos', JSON.stringify(this.selectedPhoto));
      }
    } else {
      if (photo.selected) {
        this.selectedPhoto.push(photo);
        localStorage.setItem('photos', JSON.stringify(this.selectedPhoto));
      } 
    }
  }

  ngOnInit() {
    this.selectedPhoto = [undefined, null, ""].indexOf(localStorage["photos"]) != -1 ? [] : JSON.parse(localStorage.getItem('photos'));
  }
}
