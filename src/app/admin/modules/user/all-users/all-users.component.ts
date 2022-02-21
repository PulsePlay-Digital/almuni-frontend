import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "./../../../../admin/services/data.service";
import { UsersService } from "./../../../services/users.service";

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.scss"],
})
export class AllUsersComponent implements OnInit {
  columnDefs: any;
  rowData: any = [];
  AgLoad: boolean | undefined;
  public tableConfig: any = {
    edit: true
  };
  public columnList: any = [
    {
      headerName: 'Options',
      cellRenderer: 'tools',
      field: 'id',
    },
    {
      headerName: "Full Name",
      field: 'fulllname',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Email Id",
      field: 'email',
      valueGetter: (params: any) => {
        return `${params.data.email}`;
      },
    },
    {
      headerName: "Mobile Number",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Current City",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Current Designation",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Current Company",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Status",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Institute Name",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Batch Id",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Reg. Date",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Apv. By",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Apv. Date",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
    {
      headerName: "Reset pwd",
      field: '',
      valueGetter: (params: any) => {
        // return `${params.data.id}`;
      },
    },
  
    {
      headerName: "Id",
      field: 'id',
      valueGetter: (params: any) => {
        return `${params.data.id}`;
      },
    },
    {
      headerName: "Name",
      field: 'name',
      valueGetter: (params: any) => {
        return `${params.data.name}`;
      },
    },
    {
      headerName: "Gender",
      field: 'gender',
      valueGetter: (params: any) => {
        return `${params.data.gender}`;
      },
    },
    {
      headerName: "Status",
      field: 'status',
      valueGetter: (params: any) => {
        return `${params.data.status}`;
      },
    }
  ];

  constructor(
    public userService: UsersService,
    public router: Router,
    public dataService: DataService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // this.getAllUsers();
    this.getDummyData();
  }

  getDummyData() {
    this.AgLoad = true;
    this.http.get<any[]>('https://gorest.co.in/public/v2/users').subscribe((res)=> {
      this.rowData = res;
    });     
  }

  onViewUser(e:any) {
    this.router.navigate(['/admin/view-user'],{ queryParams: { id: e.id }});
  }

  /**
   * Function to get all user from ApiApi
   */
  async getAllUsers() {
    await this.userService.getAllUsers().subscribe((user: any) => {
      // this.usersData = user.data;
    });
  }

  /**
   * Function to view user detail
   * @param user
   */
  viewUserDetail(user: any) {
    this.router.navigate(["/admin/user-detail"], {
      queryParams: { data: user },
    });
  }

  /**
   * Function to delete user by Id
   */
  async deleteUser(userId: number) {
    await this.userService.deleteUserById(userId).subscribe((res: any) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }

  /**
   * Function to Verify/Unverify Status
   * @param data
   */
  async toggleStatus(data: any) {
    let params = {
      id: data.id,
      is_verified: data.is_verified,
    };
    await this.userService.isActiveUser(params).subscribe((res: any) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }
}
