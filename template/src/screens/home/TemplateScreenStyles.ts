import { createThemedStyles } from '../../themes/ThemeUtils';

const getStyles = createThemedStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing.md,
    resizeMode: 'contain',
  },
  text: theme.typography.h1,
  caption: {
    ...theme.typography.caption,
    color: theme.colors.primary,
  },
  contactItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  contactName: theme.typography.h3,
  contactPhone: {
    ...theme.typography.body,
    color: '#666',
  },
}));

export default getStyles;
