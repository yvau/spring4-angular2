import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';
import { User } from '../form/user.model';

@Component({
  selector: 'my-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ListingService]
})
export class ListingComponent implements OnInit {

  users: User[];

  constructor(private listingService: ListingService) {
    this.listingService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
  }

}
