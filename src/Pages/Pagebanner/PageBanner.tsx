import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import "./PageBanner.scss";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

function PageBanner({ title, breadcrumb }: PageBannerProps) {
  return (
    <Box className="page_banner">
      <Box className="page_banner_content">
        <h1>{title}</h1>
        <p>
          <RouterLink to="/">Home</RouterLink> / <span>{breadcrumb}</span>
        </p>
      </Box>
    </Box>
  )
}

export default PageBanner
