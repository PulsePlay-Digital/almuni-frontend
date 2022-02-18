import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "./../../../../admin/services/data.service";
import { UsersService } from "./../../../services/users.service";

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.scss"],
})
export class AllUsersComponent implements OnInit {
  ColumnDefs: any;
  RowData: any = [];
  AgLoad: boolean | undefined;

  public columnList: any = [
    {
      headerName: "Id",
      field: 'id',
      sortable: true,
      filter: true,
      valueGetter: (params: any) => {
        console.log(params, "data");
        return `${params.data.id}`;
      },
    },
    {
      headerName: "Name",
      field: 'name',
      sortable: true,
      filter: true,
      valueGetter: (params: any) => {
        return `${params.data.name}`;
      },
    },
    {
      headerName: "Email",
      field: 'email',
      sortable: true,
      filter: true,
      valueGetter: (params: any) => {
        return `${params.data.email}`;
      },
    },
    {
      headerName: "Website",
      field: 'website',
      sortable: true,
      filter: true,
      valueGetter: (params: any) => {
        return `${params.data.website}`;
      },
    }
  ];

  constructor(
    public userService: UsersService,
    public router: Router,
    public dataService: DataService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.getAllUsers();
    this.getDummyData();
  }

  getDummyData() {
    this.AgLoad = true;
    this.RowData = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        },
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
          street: "Norberto Crossing",
          suite: "Apt. 950",
          city: "South Christy",
          zipcode: "23505-1337",
          geo: {
            lat: "-71.4197",
            lng: "71.7478",
          },
        },
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
        company: {
          name: "Considine-Lockman",
          catchPhrase: "Synchronised bottom-line interface",
          bs: "e-enable innovative applications",
        },
      }
    ];
    console.log(this.RowData, '1st')
   
    // this.RowData = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
    //  this.RowData =  await this.dataService.dummyData().toPromise();
    //  console.log(this.RowData, '2nd')
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
