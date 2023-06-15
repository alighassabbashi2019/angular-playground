import { Injectable } from "@angular/core";
import { ColumnApi, GridApi, GridOptions, GridReadyEvent } from "ag-grid-community";
import { RowStatus } from "../enums/row-status";
import { User } from "shared/backend/dtos/user.dto";
import { getUsers } from "server/client.user";
import { Observable, firstValueFrom } from "rxjs";

@Injectable()
export class AgGridHelperService {
  constructor() {}

  public gridApi!: GridApi;
  public columnApi!: ColumnApi;
  public onGridReady: (event: GridReadyEvent) => void = (event) => {};

  public rowData!: Observable<User[]>;

  getOptions(): GridOptions {
    return {
      defaultColDef: {
        sortable: true,
        resizable: true,
        menuTabs: [],
      },
      enableRtl: true,
      rowSelection: 'multiple',
      enableCellTextSelection: true,
      suppressRowClickSelection: true,
      rowClassRules: {
        'grid-row-created': `data?.rowStatus === ${RowStatus.Create}`,
        'grid-row-updated': `data?.rowStatus === ${RowStatus.Update}`,
        'grid-row-deleted': `data?.rowStatus === ${RowStatus.Delete}`,
        'grid-row-submitted': `data?.rowStatus === ${RowStatus.Submitted}`,
      },
      onGridReady: async (params: GridReadyEvent) => {
        try {
          this.gridApi = params.api;
          this.gridApi.setRowData(await this.getRowData());
          this.columnApi = params.columnApi;
        } finally {
          this.onGridReady(params);
        }
      },
    };
  }

  async getRowData() {
    const users = await getUsers();
    this.rowData = users;
    return await firstValueFrom(users);
  }
}
