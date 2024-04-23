export const formatDate = (dateStr?: string): string =>
  (dateStr ?? '').split('T')[0].replace(/-/g, '/');
