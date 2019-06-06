import React from "react"
import { Spinner } from 'reactstrap';
const withLoading = (Component)=>{
    return props=>props.isLoading?<Spinner color="#feb800" />:<Component {...props}/>
}
export default withLoading
