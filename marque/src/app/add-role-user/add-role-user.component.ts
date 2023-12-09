import { Component } from '@angular/core';
import { MarqueService } from '../MarqueService';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../model/User.model';
import { Role } from '../model/Role';

@Component({
  selector: 'app-add-role-user',
  templateUrl: './add-role-user.component.html',
  styleUrls: ['./add-role-user.component.css']
})
export class AddRoleUserComponent {
  constructor(private drugService: MarqueService, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  User!: User
  Users!: User[]
  roles!: any
  Role!: Role
  idOfRole!: Role
  NewRole!: Role


  RoleToRemove: Role = new Role();


  ngOnInit(): void {
    this.drugService.listeUser().subscribe(data => {
      this.Users = data;
      console.log(data);
    }
      ,
      err => {
        console.log(err);
      }
    );
    this.authService.consulterUser(this.activatedRoute.snapshot.params['id']).subscribe((user) => {
      this.User = user;
      console.log(this.User);
    }
    );
    this.drugService.getAllRoles().subscribe(data => {
      this.roles = data;
      console.log(data);
    },
      err => {
        console.log(err);
      }
    );
  }





  addRoleToUser() {
    console.log(this.idOfRole);
    console.log(this.activatedRoute.snapshot.params['id'])
    this.authService.AddRoleForUser(this.activatedRoute.snapshot.params['id'], this.idOfRole).subscribe((user) => {
      console.log(user);
      this.User = user;

    });
  }




  removeRoleFromUsers(id: number) {
    console.log("id of the role" + id)
    this.drugService.findRoleById(id).subscribe((role) => {
      this.Role = role;
      console.log("the role" + role.role_id);
      console.log(this.activatedRoute.snapshot.params['id'])
      this.authService.removeRoleFromUser(this.activatedRoute.snapshot.params['id'], this.Role).subscribe((user) => {
        console.log(user);
        this.User = user;
      });
    }
    );
  }


}
