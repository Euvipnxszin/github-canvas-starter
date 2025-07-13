/**
 * Get the correct asset path based on the current environment
 * In development: uses absolute path from root
 * In production (GitHub Pages): includes the base path
 */
export const getAssetPath = (path: string): string => {
  // Convert lovable-uploads paths to images paths
  let cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Replace lovable-uploads with images for proper deployment
  if (cleanPath.includes('/lovable-uploads/')) {
    cleanPath = cleanPath.replace('/lovable-uploads/', '/images/');
  }
  
  if (import.meta.env.DEV) {
    return cleanPath;
  }
  
  // In production, prepend the base path for GitHub Pages
  return `/THIS_MELTRO-AGENCY${cleanPath}`;
};