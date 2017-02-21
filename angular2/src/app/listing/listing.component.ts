import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';
import { User } from '../form/user.model';
declare var $: any;
declare var toastr: any;

@Component({
  selector: 'my-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ListingService]
})
export class ListingComponent implements OnInit {

  user: User[];
  users: User[];

  constructor(private listingService: ListingService) {

  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    // Get all users
    this.listingService.getUsers()
        .subscribe(users => {this.users = users; } ,
        err => {console.log(err);
    });
  }

  showConfirmationDialog(id: number) {
    // Call showUser() from ListingService to get user details
    this.listingService.showUser(id).subscribe(user => {
      this.user = user;
      $('.ui.basic.modal').modal('show');
    });
  }

  getNotification(evt) {
    if (evt === 'OK') {
      this.getAllUsers();
      toastr.success('Successfully removed!');
    }
  }

}
