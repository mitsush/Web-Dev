import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Photo } from '../../models/photo.model';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albumphotos.component.html',
  styleUrls: ['./albumphotos.component.css']
})
export class AlbumphotosComponent implements OnInit {
  albumId: number = 0;
  album: Album | null = null;
  photos: Photo[] = [];
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.albumId) {
      this.loadPhotos();
    }
  }

  loadAlbumData(): void {
    this.loading = true;
    
    this.albumsService.getAlbum(this.albumId).subscribe({
      next: (data) => {
        this.album = data;
        this.loadPhotos();
      },
      error: (err) => {
        this.error = 'Failed to load album information. Please try again later.';
        this.loading = false;
        console.error('Error loading album:', err);
      }
    });
  }

  loadPhotos(): void {
    this.albumsService.getPhotosByAlbumId(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
      },
      error: (err) => {
        console.error('Error loading photos:', err);
      }
    });
  }

  returnToAlbums(): void {
    this.router.navigate(['/albums']);
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}