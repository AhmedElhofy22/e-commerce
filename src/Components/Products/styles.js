import { styled } from "@mui/system";

export default styled(()=>({
    root:{
        maxWidth:'100%',
    },
    media:{
        height:"100%" ,
        paddingTop:'56.25%',
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between'
    },
}))