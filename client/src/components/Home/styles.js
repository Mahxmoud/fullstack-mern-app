import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
        height: 100,
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            direction: 'column-reverse'
        },
    },
    home: {
        marginBottom: '20px'
    },
    sectionheading: {
        fontWeight: "bold",
        fontSize: '46px',
        textAlign: 'center',
        color: 'white',
    },
    whoWeAre: {
        height: '100vh',

    },
    secTitle: {
        color: '#fff',
        fontSize: '42px',

    },
    coloredTitle: {
        color: '#00ADEF'
    },
    section: {
        background: 'rgba(255, 255, 255,0.1)',
        height: '50vh',
        marginTop: '10vh',
        padding: '30px',
        color: '#fff',
        fontFamily: 'nunito ',
        backdropFilter: 'blur(50xp)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    secContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px', 


    },
    cardImg: {
        height: '50vh',
        borderRadius: '20px',
    },
    para: {
        fontFamily: 'nunito',
        fontSize: '24px',
        paddingRight: '20px', 
        paddingLift: '10px', 
        color: '#fff', 
    }
}))