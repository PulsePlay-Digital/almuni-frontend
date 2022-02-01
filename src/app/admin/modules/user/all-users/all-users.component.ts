import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  // dtOptions: DataTables.Setting = {};
  usersData: any = [];
  status: string | undefined;
  data = [{ id: '1', first_nme: 'sunny', last_name: 'singh', email: 'a@gmail.com', phone: 851258622, country: 'India' }];

  public defaultColDef: any = {
    editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      // filter: true,
      floatingFilter: true,
      resizable: true,
      pagination: true,
      filter: 'agTextColumnFilter'
  };
  public columnList: any = [
    {
      headerName: 'Full Name',
      valueGetter: (params: any) => {
        return `${params.data.first_name} ${params.data.last_name}`;
      } 
    },
    {
      headerName: 'Email Id',
      valueGetter: (params: any) => {
        return `${params.data.email}`;
      }
    },
    {
      headerName: 'Mobile Number',
      valueGetter: (params: any) => {
        return `${params.data.mobile_number}`;
      }
    },
    
    {
      headerName: 'Current City',
      valueGetter: (params: any) => {
        return `${params.data.city}`;
      }
    },
    {
      headerName: 'Institute Name',
      valueGetter: (params: any) => {
        return `${params.data.institute_id}`;
      }
    },
    {
      headerName: 'Batch Year',
      valueGetter: (params: any) => {
        return `${params.data.batchYear_id}`;
      }
    },
    {
      headerName: 'Registration Date',
      valueGetter: (params: any) => {
        return `${params.data.created_at}`;
      }
    },
    {
      headerName: 'Approve/Delete'
    }
  ];

  constructor(
    public userService: UsersService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 4,
    //   processing: false,
    // };
  }


  /**
   * Function to get all user from ApiApi
   */
   async getAllUsers() {
    await this.userService.getAllUsers().subscribe((user: any) => {
      this.usersData = user.data;
    })
  }

  /**
   * Function to view user detail
   * @param user 
   */
  viewUserDetail(user: any) {
    this.router.navigate(['/admin/user-detail'], { queryParams: { data:user } });
  }

  /**
   * Function to delete user by Id
   */
  async deleteUser(userId: number) {
    await this.userService.deleteUserById(userId).subscribe((res: any) => {
      if (res) {
        this.ngOnInit();
      }
    })
  }

  /**
   * Function to Verify/Unverify Status
   * @param data 
   */
  async toggleStatus(data: any) {
    let params = {
      id: data.id,
      is_verified: data.is_verified
    }
    await this.userService.isActiveUser(params).subscribe((res: any) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }
}
