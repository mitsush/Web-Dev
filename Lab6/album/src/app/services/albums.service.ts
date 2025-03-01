import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  private albumsUrl = 'assets/albums.json'; 
  private photosUrl = 'assets/photos.json'; 
  private albumsCache: Album[] = []; 
  private localStorageKey = 'albums_data';
  
  constructor(private http: HttpClient) {
    this.loadCacheFromStorage();
  }  //const s = localStorage.getItem(this.localStorageKey);
  //if (s) {
  //this.albumsCache = JSON.parse(savedAlbums);
  
  private loadCacheFromStorage(): void {
    const savedAlbums = localStorage.getItem(this.localStorageKey);
    if (savedAlbums) {
      this.albumsCache = JSON.parse(savedAlbums);
    }
  } //localStorage.setItem(this.localStorageKey, JSON.stringify(this.albumsCache));
  
  private saveCacheToStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.albumsCache));
  } //if (this.albumsCache.length > 0) { return of(this.albumsCache); }
  
  getAlbums(): Observable<Album[]> {
    if (this.albumsCache.length > 0) {
      return of(this.albumsCache);
    }
    return this.http.get<Album[]>(this.albumsUrl).pipe(
      map(albums => {
        this.albumsCache = albums;
        this.saveCacheToStorage();
        return albums;
      })
    );
  }

  getAlbum(id: number): Observable<Album> {
    if (this.albumsCache.length > 0) {
      const album = this.albumsCache.find(a => a.id === id);
      return of(album!);
    }
    return this.getAlbums().pipe(
      map(albums => albums.find(album => album.id === id)!)
    );
  }
  
  updateAlbum(album: Album): Observable<Album> {
    const index = this.albumsCache.findIndex(a => a.id === album.id);
    if (index !== -1) {
      this.albumsCache[index] = album;
      this.saveCacheToStorage();
    }
    return of(album);
  }
  
  updateAl(album: Album): Observable<Album> {
    const index = this.albumsCache.findIndex(a => a.id ==album.id);
    if (index != -1) {
      this.albumsCache[index] = album;
      this.saveCacheToStorage();
    }
    return of(album);
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl);
  }
  
  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.getPhotos().pipe(
      map((photos: Photo[]) => photos.filter(photo => photo.albumId === albumId))
    );
  }
  
  deleteAlbum(id: number): Observable<void> {
    this.albumsCache = this.albumsCache.filter(album => album.id !== id);
    this.saveCacheToStorage();
    return of(void 0);
  }
}