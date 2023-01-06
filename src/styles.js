import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    Container: {
      paddingTop: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
    },
    appBar: {
      borderRadius: 15,
      marginBottom: '30px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',


      //Frosted Glass Effect
      boxShadow: 'inset 0px 0px 2000px rgba(255, 255, 255, .5)',
      backdropFilter: 'blur(5px)',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      border: '2px solid rgb(245,245,245)',
    },
    heading: {
      color: 'rgba(85,171,229, 1)',
    },
    image: {
      marginLeft: '15px',
    },
    mainContainer: {
      
      //boxShadow: ' inset 0 0 2000px rgba(255, 255, 255, .5)',
    
    },
    [theme.breakpoints.down('sm')]: {
      mainContainer: {
        flexDirection: "column-reverse",
      }
    }
  }));