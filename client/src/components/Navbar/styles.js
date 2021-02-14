import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },
    image: {
        height: '60px', 
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '320px',
    },
    user: {
        display: 'flex', 
        flexDirection: 'row',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '5px', 
        paddingRight: '25px',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logout: {
        minWidth: '170px',
        marginTop: '10px'
    },
    blue: {
        color: '#ffffff',
        backgroundColor: '#00ADEF',
    },
}));
