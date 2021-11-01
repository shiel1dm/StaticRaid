import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        display: 'flex',
        
        
    },
    Button: {
        background: '#6c74cc',
        borderRadius: 3,
        border: 0,
        height: 48,
        padding: '0 30px',
        '&:disabled': {
            color: 'white',
        },    
    }
}));