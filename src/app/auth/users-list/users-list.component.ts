import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { getUsers } from 'server/client.user';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { AgGridHelperService } from 'shared/frontend/data-access/ag-grid-helper/ag-grid-helper.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'email' },
    { field: 'username' },
    { field: 'password' },
  ];

  rowData!: Observable<any>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private _agHelperService: AgGridHelperService) {}

  async onGridReady(params: GridReadyEvent) {
    const users = await getUsers();
    this.rowData = users;
  }

  get gridOptions() {
    return {
      ...this._agHelperService.getOptions(),
      columnDefs: this.columnDefs
    };
  }

  ngOnInit(): void {}
}
