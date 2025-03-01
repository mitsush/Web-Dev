import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [AlbumsService],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data; 
      }});
  }

  viewAlbumDetails(albumId: number): void {
    this.router.navigate(['/album', albumId]); 
  }

  deleteAlbum(albumId: number, event: Event): void {
    event.stopPropagation(); 
    this.albumsService.deleteAlbum(albumId).subscribe({
      next: () => {
        this.albums = this.albums.filter(album => album.id !== albumId); 
        alert(`Album with ID ${albumId} deleted.`);
      },
    });
  }

  delete(albumId: number, event: Event): void {
    event.stopPropagation();
    this.albumsService.deleteAlbum(albumId).subscribe({
      next: () => { 
        this.albums = this.albums.filter(albumId => albumId !== albumId);
      }
    })
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}