import React from 'react'
import { DataGrid } from '@mui/x-data-grid';


const UserList = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  )
}

export default UserList