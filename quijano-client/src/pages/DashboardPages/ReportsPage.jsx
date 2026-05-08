import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Stack,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Tabs,
  Tab
} from '@mui/material';
import {
  Download,
  Refresh,
  TrendingUp,
  TrendingDown,
  Assessment,
  Timeline,
  PieChart as PieChartIcon,
  BarChart as BarChartIcon
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const ReportsPage = () => {
  const [timeRange, setTimeRange] = React.useState('month');
  const [tabValue, setTabValue] = React.useState(0);

  // Mock data for various charts
  const trafficData = [
    { month: 'Jan', visitors: 4000, pageViews: 12000, bounceRate: 45 },
    { month: 'Feb', visitors: 3500, pageViews: 10500, bounceRate: 48 },
    { month: 'Mar', visitors: 5200, pageViews: 15600, bounceRate: 42 },
    { month: 'Apr', visitors: 6800, pageViews: 20400, bounceRate: 38 },
    { month: 'May', visitors: 5500, pageViews: 16500, bounceRate: 40 },
    { month: 'Jun', visitors: 7200, pageViews: 21600, bounceRate: 35 },
  ];

  const contentPerformance = [
    { name: 'Blog Posts', views: 4500, engagement: 78, shares: 234 },
    { name: 'Portfolio', views: 3200, engagement: 85, shares: 189 },
    { name: 'Articles', views: 2800, engagement: 72, shares: 156 },
    { name: 'About Page', views: 2100, engagement: 65, shares: 98 },
    { name: 'Contact', views: 1800, engagement: 58, shares: 76 },
  ];

  const deviceAnalytics = [
    { name: 'Desktop', value: 45, color: '#8884d8', users: 3240 },
    { name: 'Mobile', value: 35, color: '#82ca9d', users: 2520 },
    { name: 'Tablet', value: 20, color: '#ffc658', users: 1440 },
  ];

  const performanceMetrics = [
    { subject: 'Load Time', A: 85, fullMark: 100 },
    { subject: 'SEO Score', A: 92, fullMark: 100 },
    { subject: 'User Experience', A: 88, fullMark: 100 },
    { subject: 'Content Quality', A: 95, fullMark: 100 },
    { subject: 'Mobile Friendly', A: 90, fullMark: 100 },
    { subject: 'Accessibility', A: 78, fullMark: 100 },
  ];

  const topPages = [
    { page: '/portfolio', views: 3420, change: '+12%', trend: 'up' },
    { page: '/about', views: 2890, change: '+8%', trend: 'up' },
    { page: '/articles/react-guide', views: 2156, change: '-3%', trend: 'down' },
    { page: '/contact', views: 1876, change: '+15%', trend: 'up' },
    { page: '/articles/portfolio-tips', views: 1654, change: '+5%', trend: 'up' },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#111827' }}>
          Analytics & Reports
        </Typography>
        <Stack direction="row" spacing={2}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              label="Time Range"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="week">Last Week</MenuItem>
              <MenuItem value="month">Last Month</MenuItem>
              <MenuItem value="quarter">Last Quarter</MenuItem>
              <MenuItem value="year">Last Year</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" startIcon={<Refresh />}>
            Refresh
          </Button>
          <Button variant="contained" startIcon={<Download />}>
            Export Report
          </Button>
        </Stack>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3f4f6', border: '1px solid #e5e7eb' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#8884d8', mr: 2 }}>
                  <TrendingUp />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Total Visitors
                  </Typography>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    24,200
                  </Typography>
                </Box>
              </Box>
              <Chip label="+18% from last month" color="success" size="small" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3f4f6', border: '1px solid #e5e7eb' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#82ca9d', mr: 2 }}>
                  <Assessment />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Page Views
                  </Typography>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    86,400
                  </Typography>
                </Box>
              </Box>
              <Chip label="+25% from last month" color="success" size="small" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3f4f6', border: '1px solid #e5e7eb' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#ffc658', mr: 2 }}>
                  <Timeline />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Avg. Session
                  </Typography>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    4m 32s
                  </Typography>
                </Box>
              </Box>
              <Chip label="-5% from last month" color="warning" size="small" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3f4f6', border: '1px solid #e5e7eb' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#ff7c7c', mr: 2 }}>
                  <PieChartIcon />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Bounce Rate
                  </Typography>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    38.2%
                  </Typography>
                </Box>
              </Box>
              <Chip label="-8% from last month" color="success" size="small" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tabs for different report sections */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Traffic Analysis" />
          <Tab label="Content Performance" />
          <Tab label="Device Analytics" />
          <Tab label="Performance Metrics" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {tabValue === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, height: 400 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Traffic Overview
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="visitors" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="pageViews" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: 400 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Top Pages
              </Typography>
              <List sx={{ maxHeight: 320, overflow: 'auto' }}>
                {topPages.map((page, index) => (
                  <Box key={index}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary={page.page}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2" color="text.primary">
                              {page.views.toLocaleString()} views
                            </Typography>
                            <Chip 
                              label={page.change} 
                              size="small" 
                              color={page.trend === 'up' ? 'success' : 'error'}
                            />
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < topPages.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      )}

      {tabValue === 1 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, height: 400 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Content Performance
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={contentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="#8884d8" />
                  <Bar dataKey="engagement" fill="#82ca9d" />
                  <Bar dataKey="shares" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      )}

      {tabValue === 2 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: 400 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Device Distribution
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceAnalytics}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {deviceAnalytics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: 400 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Device Users
              </Typography>
              <List>
                {deviceAnalytics.map((device, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: device.color }}>
                        {device.name.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={device.name}
                      secondary={`${device.users.toLocaleString()} users (${device.value}%)`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      )}

      {tabValue === 3 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, height: 500 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Performance Metrics
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={performanceMetrics}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Score" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ReportsPage;