import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albumdetail.component.html',
  styleUrls: ['./albumdetail.component.css']
})
export class AlbumdetailComponent implements OnInit {
  album: Album | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadAlbum(id);
    });
  }

  loadAlbum(id: number): void {
    this.albumsService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data; }
    });
  }

  load(id: number): void { 
    this.albumsService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
      }
    })
  }

  returnToAlbums(): void {
    this.router.navigate(['/albums']);
  }

  saveAlbum(): void {
    if (this.album) {
      this.albumsService.updateAlbum(this.album).subscribe({
        next: (updatedAlbum) => {
          alert('Album title updated successfully!'); }
      });
    }
  }
  
  deleteAlbum(): void {
    if (!this.album) {
      alert('No album to delete.');
      return;
    }
    this.albumsService.deleteAlbum(this.album.id).subscribe({
      next: () => {
        alert('Album deleted successfully!');
        this.returnToAlbums(); 
      },
    });
  }

  goToPhotos(): void {
    if (!this.album) {
      return;
    }
    this.router.navigate(['/album', this.album.id, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
