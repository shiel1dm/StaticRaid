import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function RowsGrid() {
    return (
        <div style={{ height: 250, width: '100%' }}>
            <DataGrid
                columns={[
                    { field: 'member' },
                    { field: 'role' },
                    { field: 'availability' },        
            
            
            ]}
                rows={[
                    { id: 1, name: '' },
                    { id: 2, name: '' },
                    { id: 3, name: '' },
                ]}
            />
        </div>
    );
}