import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListingService } from '../listing/listing.service';
import { User } from '../form/user.model';

@Component({
  selector: 'my-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],
  providers: [ListingService]
})
export class ModalDialogComponent implements OnInit {
  @Input() user: User;

  @Output() notifyListing: EventEmitter<any> = new EventEmitter();
  deleteUser(id: number) {
    // Call removeUser() from ListingService to delete user
    this.listingService.removeUser(id).subscribe(response => {
        console.log(response.statusText);
        this.notifyListing.emit(response.statusText);
    });
  }

  ngOnInit() {
  }

  constructor(private listingService: ListingService){

  }

}
