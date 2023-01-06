import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
    border: '1px solid white',
    borderRadius: '10px',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '100%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: 'lightblue',
  },
  clearSubmit: {
    marginBottom: 5,
    backgroundColor: 'transparent',
    border: '1px solid lightgrey',
    color: 'white'
  },
}));