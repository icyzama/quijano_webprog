import { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { fetchArticles } from '../../services/ArticleService';

const DashArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetchArticles();
        setArticles(response.data.articles || []);
      } catch (error) {
        console.error('Failed to load dashboard articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const columns = [
    { field: 'title', headerName: 'Title', flex: 1, minWidth: 220 },
    { field: 'category', headerName: 'Category', flex: 0.8, minWidth: 140 },
    { field: 'readTime', headerName: 'Read Time', flex: 0.6, minWidth: 120 },
    { field: 'name', headerName: 'Slug', flex: 0.8, minWidth: 160 },
  ];

  const rows = articles.map((article) => ({
    id: article._id,
    ...article,
  }));

  return (
    <Box>
      <Stack spacing={3} sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Dashboard Articles
        </Typography>
        <Typography color="text.secondary">
          These articles are available on the public Article List page and are managed from the backend.
        </Typography>
      </Stack>

      {loading ? (
        <Typography textAlign="center" color="text.secondary">
          Loading articles...
        </Typography>
      ) : (
        <Box sx={{ height: 520, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
            disableSelectionOnClick
          />
        </Box>
      )}
    </Box>
  );
};

export default DashArticleListPage;
