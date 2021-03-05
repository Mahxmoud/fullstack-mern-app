import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    appBar: {
        background: 'rgba(255, 255, 255,0.3)',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    toolbar: {
        position: 'static', 
        width: '80%',
        margin: '0 auto'
    },
    title: {
        color: '#ffffff',
        fontSize: '60px',
    },
    coloredTitle: {
        color: '#00ADEF'
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    hero: {
        textAlign: 'center'
    },
    goDown: {
        color: '#00ADEF',
        fontSize: '56px'
    },
    logout: {
        marginTop: '10px'
    },
    blue: {
        color: '#ffffff',
        backgroundColor: '#00ADEF',
    },
}));
