import {
  Typography,
  Card,
  CardContent,
  Stack,
  Box
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function DashboardPage() {
  // Mock data for DataGrid
  const rows = [
    { id: 1, name: 'John Doe', age: 45, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 58, email: 'bob@example.com' },
    { id: 4, name: 'Alice Brown', age: 38, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Wilson', age: 52, email: 'charlie@example.com' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'email', headerName: 'Email', width: 200 },
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      
      {/* Summary Section */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Card><CardContent><Typography variant="h6">Total Users</Typography><Typography variant="h4">{rows.length}</Typography></CardContent></Card>
        <Card><CardContent><Typography variant="h6">Average Age</Typography><Typography variant="h4">47.8</Typography></CardContent></Card>
      </Stack>

      {/* Visualizations */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
        <Box sx={{ height: 290, width: '100%' }}>
          <ResponsiveContainer>
            <BarChart data={[{ name: 'A', value: 35 }, { name: 'B', value: 44 }, { name: 'C', value: 24 }, { name: 'D', value: 34 }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ height: 200, width: 200 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={[{ name: 'Series A', value: 10 }]}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Stack>

      {/* Data Grid */}
      <Typography variant="h5" gutterBottom>Users Overview</Typography>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </Box>
    </>
  );
}

export default DashboardPage;