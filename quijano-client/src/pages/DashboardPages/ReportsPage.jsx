import { useMemo, useRef } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from "@mui/x-data-grid";
import usersSeed from '../../assets/users.json?raw';

const loadUsers = () => {
  try {
    return JSON.parse(usersSeed).map((user, index) => ({
      id: Number(user.id) || index + 1,
      firstName: String(user.firstName ?? '').trim(),
      lastName: String(user.lastName ?? '').trim(),
      age: Number(String(user.age ?? '').trim()) || 0,
      gender: String(user.gender ?? '').trim().toLowerCase(),
      contactNumber: String(user.contactNumber ?? '').trim(),
      email: String(user.email ?? '').trim().toLowerCase(),
      role: String(user.role ?? '').trim().toLowerCase(),
      isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
    }));
  } catch {
    return [];
  }
};

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row?.firstName ?? ''} ${params.row?.lastName ?? ''}`.trim(),
  },
  { field: 'gender', headerName: 'Gender', width: 120 },
  { field: 'contactNumber', headerName: 'Contact Number', width: 160 },
  { field: 'email', headerName: 'Email', flex: 1, minWidth: 220 },
  {
    field: 'role',
    headerName: 'Role',
    width: 120,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    sortable: false,
    valueGetter: (params) => (params.row?.isActive ? 'Active' : 'Inactive'),
  },
];

const ReportsPage = () => {
  const printRef = useRef(null);
  const users = useMemo(loadUsers, []);
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.isActive).length;
  const averageAge = users.length
    ? Number((users.reduce((sum, user) => sum + user.age, 0) / users.length).toFixed(1))
    : 0;

  const roleLabels = ['admin', 'editor', 'viewer'];
  const roleCounts = roleLabels.map(
    (role) => users.filter((user) => user.role === role).length
  );

  const genderData = [
    { id: 0, value: users.filter((user) => user.gender === 'female').length, label: 'Female' },
    { id: 1, value: users.filter((user) => user.gender === 'male').length, label: 'Male' },
    { id: 2, value: users.filter((user) => user.gender === 'other').length, label: 'Other' },
  ];

  const activeRate = users.length ? Math.round((activeUsers / users.length) * 100) : 0;

  const reportRows = users.map((user) => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName}`.trim(),
    status: user.isActive ? 'Active' : 'Inactive',
  }));

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) return;

    const headMarkup = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((node) => node.outerHTML)
      .join('');

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Print Report</title>
        ${headMarkup}
        <style>
          @page {
            size: A4;
            margin: 16mm;
          }
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #fff;
            color: #1f2937;
          }
          .report-shell {
            padding: 28px;
          }
          .report-header {
            margin-bottom: 24px;
            padding-bottom: 14px;
            border-bottom: 1px solid #d1d5db;
          }
          .report-header h1 {
            margin: 0 0 6px;
            font-size: 28px;
            font-weight: 700;
          }
          .report-header p {
            margin: 0;
            font-size: 14px;
            color: #6b7280;
            line-height: 1.5;
          }
          .report-content .MuiCard-root {
            box-shadow: none !important;
            border: 1px solid #e5e7eb;
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 20px;
          }
          .report-content .MuiCardContent-root {
            padding: 20px;
          }
          .report-content svg {
            max-width: 100%;
          }
        </style>
      </head>
      <body>
        <main class="report-shell">
          <header class="report-header">
            <h1>Reports Summary</h1>
            <p>Analytics overview for generated reports, category breakdown, and completion performance.</p>
            <p>Prepared on ${exportedAt}</p>
          </header>
          <section class="report-content">
            ${printContent.outerHTML}
          </section>
        </main>
      </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{
          mb: 4,
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Reports
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Report analytics overview showing generated reports, category breakdown, and current completion performance.
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ flexWrap: 'wrap', gap: 1.5 }}
        >
          <Button variant="contained">Generate</Button>
          <Button variant="outlined" onClick={handlePrint}>Export</Button>
          <Button variant="outlined">Filter</Button>
        </Stack>
      </Stack>

      <Stack ref={printRef} spacing={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Report Output
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              User counts are broken down across roles to help track how many administrators, editors, and viewers are present in the system.
            </Typography>
            <BarChart
              series={[
                { data: roleCounts, label: 'Users' },
              ]}
              width={620}
              height={320}
              xAxis={[
                {
                  data: ['Admin', 'Editor', 'Viewer'],
                  scaleType: 'band',
                  label: 'Role',
                },
              ]}
            />
          </CardContent>
        </Card>

        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Gender Breakdown
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                This chart shows the gender distribution of the imported user dataset.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart
                  series={[
                    {
                      data: genderData,
                    },
                  ]}
                  width={280}
                  height={220}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Active User Rate
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                The gauge shows the percentage of users currently marked as active in the imported dataset.
              </Typography>
              <Box
                sx={{
                  minHeight: 220,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Gauge width={180} height={180} value={activeRate} />
              </Box>
            </CardContent>
          </Card>
        </Stack>

        <Card>
          <CardContent>
            <Box sx={{ mb: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Typography variant="body2" sx={{ minWidth: 150 }}>
                Total users: <strong>{totalUsers}</strong>
              </Typography>
              <Typography variant="body2" sx={{ minWidth: 150 }}>
                Active users: <strong>{activeUsers}</strong>
              </Typography>
              <Typography variant="body2" sx={{ minWidth: 150 }}>
                Average age: <strong>{averageAge}</strong>
              </Typography>
            </Box>
            <DataGrid
              rows={reportRows}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
              autoHeight
            />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default ReportsPage;
