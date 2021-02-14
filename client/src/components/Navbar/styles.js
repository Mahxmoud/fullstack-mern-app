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
        marginLeft: '15px',
        height: '60px', 
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '320px',
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
    blue: {
        color: '#ffffff',
        backgroundColor: '#00ADEF',
    },
}));
