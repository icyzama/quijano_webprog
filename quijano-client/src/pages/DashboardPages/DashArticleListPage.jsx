import { Box, Typography, Stack } from '@mui/material';
import ArticleList from '../../components/ArticleList.jsx';
import { articles } from '../../assets/articles.js';

const DashArticleListPage = () => {
  return (
    <Box>
      <Stack spacing={3} sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Dashboard Articles
        </Typography>
        <Typography color="text.secondary">
          These articles are also available on the public Article List page. Editors and admins can review the available content here.
        </Typography>
      </Stack>

      <ArticleList articles={articles} />
    </Box>
  );
};

export default DashArticleListPage;
