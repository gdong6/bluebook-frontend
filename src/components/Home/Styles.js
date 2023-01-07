import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 10,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: 'transparent',
    border: '1px solid white',
  },
  searchButton: {
    backgroundColor: 'lightblue',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));