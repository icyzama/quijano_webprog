import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
  Chip,
  Card,
  CardContent,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Badge
} from '@mui/material';
import {
  Search,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  Add as AddIcon,
  FilterList,
  MoreVert,
  Person as PersonIcon,
  AdminPanelSettings,
  Security,
  Group
} from '@mui/icons-material';
import {
  DataGrid,
  GridActionsCellItem
} from '@mui/x-data-grid';
import { useState } from 'react';

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2024-01-15', lastLogin: '2024-06-10', avatar: 'JD', projects: 12, articles: 8 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joinDate: '2024-02-20', lastLogin: '2024-06-09', avatar: 'JS', projects: 5, articles: 3 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', joinDate: '2024-03-10', lastLogin: '2024-05-15', avatar: 'BJ', projects: 8, articles: 2 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active', joinDate: '2024-01-25', lastLogin: '2024-06-11', avatar: 'AB', projects: 15, articles: 12 },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active', joinDate: '2024-04-05', lastLogin: '2024-06-08', avatar: 'CW', projects: 3, articles: 1 },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active', joinDate: '2024-02-15', lastLogin: '2024-06-11', avatar: 'DP', projects: 20, articles: 15 },
    { id: 7, name: 'Edward Norton', email: 'edward@example.com', role: 'User', status: 'Pending', joinDate: '2024-05-20', lastLogin: '2024-06-10', avatar: 'EN', projects: 1, articles: 0 },
    { id: 8, name: 'Fiona Green', email: 'fiona@example.com', role: 'User', status: 'Active', joinDate: '2024-03-25', lastLogin: '2024-06-09', avatar: 'FG', projects: 6, articles: 4 },
  ];

  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // User statistics
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'Active').length;
  const adminUsers = users.filter(u => u.role === 'Admin').length;
  const pendingUsers = users.filter(u => u.status === 'Pending').length;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#111827' }}>
          User Management
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" startIcon={<AddIcon />}>
            Add New User
          </Button>
          <Button variant="outlined" startIcon={<FilterList />}>
            Bulk Actions
          </Button>
        </Stack>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3f4f6', border: '1px solid #e5e7eb' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#8884d8', mr: 2 }}>
                  <Group />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Total Users
                  </Typography>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    {totalUsers}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3f4f6', border: '1px solid #e5e7eb' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#82ca9d', mr: 2 }}>
                  <PersonIcon />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Active Users
                  </Typography>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    {activeUsers}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3f4f6', border: '1px solid #e5e7eb' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#ffc658', mr: 2 }}>
                  <AdminPanelSettings />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Admin Users
                  </Typography>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    {adminUsers}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3f4f6', border: '1px solid #e5e7eb' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Badge badgeContent={pendingUsers} color="warning">
                  <Avatar sx={{ bgcolor: '#ff7c7c', mr: 2 }}>
                    <Security />
                  </Avatar>
                </Badge>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Pending Users
                  </Typography>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    {pendingUsers}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Search and Filters */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Role</InputLabel>
              <Select
                value={roleFilter}
                label="Role"
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <MenuItem value="all">All Roles</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Moderator">Moderator</MenuItem>
                <MenuItem value="User">User</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Status</InputLabel>
              <Select
                value={statusFilter}
                label="Status"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="all">All Status</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button variant="outlined" fullWidth startIcon={<FilterList />}>
              More Filters
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* User List View */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              User List ({filteredUsers.length} users)
            </Typography>
            <List sx={{ maxHeight: 600, overflow: 'auto' }}>
              {filteredUsers.map((user, index) => (
                <Box key={user.id}>
                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: '#8884d8' }}>
                        {user.avatar}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="subtitle1" fontWeight="medium">
                            {user.name}
                          </Typography>
                          <Chip 
                            label={user.role} 
                            size="small" 
                            color={
                              user.role === 'Admin' ? 'error' :
                              user.role === 'Moderator' ? 'warning' : 'primary'
                            }
                          />
                          <Chip 
                            label={user.status} 
                            size="small" 
                            color={
                              user.status === 'Active' ? 'success' :
                              user.status === 'Inactive' ? 'error' : 'warning'
                            }
                          />
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.primary">
                            {user.email}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Joined: {user.joinDate} • Last login: {user.lastLogin}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {user.projects} projects • {user.articles} articles
                          </Typography>
                        </Box>
                      }
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton size="small">
                        <ViewIcon />
                      </IconButton>
                      <IconButton size="small">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small">
                        <MoreVert />
                      </IconButton>
                    </Box>
                  </ListItem>
                  {index < filteredUsers.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Recent Activity
            </Typography>
            <List sx={{ maxHeight: 300, overflow: 'auto' }}>
              {filteredUsers.slice(0, 5).map((user, index) => (
                <Box key={index}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: '#82ca9d' }}>
                        {user.avatar}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={`Last active: ${user.lastLogin}`}
                    />
                  </ListItem>
                  {index < 4 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Role Distribution
            </Typography>
            <List>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary="Admin Users"
                  secondary={`${adminUsers} users`}
                />
                <Chip label={`${Math.round((adminUsers / totalUsers) * 100)}%`} size="small" />
              </ListItem>
              <Divider />
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary="Moderator Users"
                  secondary={`${users.filter(u => u.role === 'Moderator').length} users`}
                />
                <Chip label={`${Math.round((users.filter(u => u.role === 'Moderator').length / totalUsers) * 100)}%`} size="small" />
              </ListItem>
              <Divider />
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary="Regular Users"
                  secondary={`${users.filter(u => u.role === 'User').length} users`}
                />
                <Chip label={`${Math.round((users.filter(u => u.role === 'User').length / totalUsers) * 100)}%`} size="small" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UsersPage;