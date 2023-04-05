import axios from "axios";

export const POST_POLL_DATA_REQUEST = "POST_POLL_DATA_REQUEST";
export const POST_POLL_DATA_SUCCESS = "POST_POLL_DATA_SUCCESS";
export const POST_POLL_DATA_FAILURE = "POST_POLL_DATA_FAILURE";

export const ADD_TEMPLATE_DATA_REQUEST = "ADD_TEMPLATE_DATA_REQUEST";
export const ADD_TEMPLATE_DATA_SUCCESS = "ADD_TEMPLATE_DATA_SUCCESS";
export const ADD_TEMPLATE_DATA_FAILURE = "ADD_TEMPLATE_DATA_FAILURE";

export const GET_TEMPLATE_DATA_REQUEST = "GET_TEMPLATE_DATA_REQUEST";
export const GET_TEMPLATE_DATA_SUCCESS = "GET_TEMPLATE_DATA_SUCCESS";
export const GET_TEMPLATE_DATA_FAILURE = "GET_TEMPLATE_DATA_FAILURE";

export const GET_TEMPLATE_BY_ID_DATA_REQUEST = "GET_TEMPLATE_BY_ID_DATA_REQUEST";
export const GET_TEMPLATE_BY_ID_DATA_SUCCESS = "GET_TEMPLATE_BY_ID_DATA_SUCCESS";
export const GET_TEMPLATE_BY_ID_DATA_FAILURE = "GET_TEMPLATE_BY_ID_DATA_FAILURE";

export const GET_ALL_DATA_REQUEST = "GET_ALL_DATA_REQUEST";
export const GET_ALL_DATA_SUCCESS = "GET_ALL_DATA_SUCCESS";
export const GET_ALL_DATA_FAILURE = "GET_ALL_DATA_FAILURE";

export const GET_LIVE_DATA_REQUEST = "GET_LIVE_DATA_REQUEST";
export const GET_LIVE_DATA_SUCCESS = "GET_LIVE_DATA_SUCCESS";
export const GET_LIVE_DATA_FAILURE = "GET_LIVE_DATA_FAILURE";

export const STOP_POLL_REQUEST = "STOP_POLL_REQUEST";
export const STOP_POLL_SUCCESS = "STOP_POLL_SUCCESS";
export const STOP_POLL_FAILURE = "STOP_POLL_FAILURE";

export const ENDED_POLL_REQUEST = "ENDED_POLL_REQUEST";
export const ENDED_POLL_SUCCESS = "ENDED_POLL_SUCCESS";
export const ENDED_POLL_FAILURE = "ENDED_POLL_FAILURE";



export const postPollDataRequest = ()=>{
    return({
        type:POST_POLL_DATA_REQUEST
    })
}


export const postPollDataSuccess = ()=>{
    return({
        type:POST_POLL_DATA_SUCCESS,
     
    })
}


export const postPollDataFailure = ()=>{
    return({
        type:POST_POLL_DATA_FAILURE
    })
}



export const addTemplateDataRequest = ()=>{
    return({
        type:ADD_TEMPLATE_DATA_REQUEST
    })
}


export const addTemplateDataSuccess = ()=>{
    return({
        type:ADD_TEMPLATE_DATA_SUCCESS
       
    })
}


export const addTemplateDataFailure = ()=>{
    return({
        type:ADD_TEMPLATE_DATA_FAILURE
    })
}



export const getTemplateDataRequest = ()=>{
    return({
        type:GET_TEMPLATE_DATA_REQUEST
    })
}


export const getTemplateDataSuccess = (data)=>{
    return({
        type:GET_TEMPLATE_DATA_SUCCESS,
        payload:data
    })
}


export const getTemplateDataFailure = ()=>{
    return({
        type:GET_TEMPLATE_DATA_FAILURE
    })
}



export const getTemplateByIdDataRequest = ()=>{
    return({
        type:GET_TEMPLATE_BY_ID_DATA_REQUEST
    })
}


export const getTemplateByIdDataSuccess = (data)=>{
    return({
        type:GET_TEMPLATE_BY_ID_DATA_SUCCESS,
        payload:data
    })
}


export const getTemplateByIdDataFailure = ()=>{
    return({
        type:GET_TEMPLATE_BY_ID_DATA_FAILURE
    })
}





export const getAllDataRequest = ()=>{
    return({
        type:GET_ALL_DATA_REQUEST
    })
}


export const getAllDataSuccess = (data)=>{
    return({
        type:GET_ALL_DATA_SUCCESS,
        payload:data
    })
}


export const getAllDataFailure = ()=>{
    return({
        type:GET_ALL_DATA_FAILURE
    })
}



export const getLiveDataRequest = ()=>{
    return({
        type:GET_LIVE_DATA_REQUEST
    })
}


export const getLiveDataSuccess = (data)=>{
    return({
        type:GET_LIVE_DATA_SUCCESS,
        payload:data
    })
}


export const getLiveDataFailure = ()=>{
    return({
        type:GET_LIVE_DATA_FAILURE
    })
}



export const stopPollRequest = ()=>{
    return({
        type:STOP_POLL_REQUEST
    })
}


export const stopPollSuccess = (data)=>{
    return({
        type:STOP_POLL_SUCCESS,
        payload:data
    })
}


export const stopPollFailure = ()=>{
    return({
        type:STOP_POLL_FAILURE
    })
}



export const endedPollRequest = ()=>{
    return({
        type:ENDED_POLL_REQUEST
    })
}


export const endedPollSuccess = (data)=>{
    return({
        type:ENDED_POLL_SUCCESS,
        payload:data
    })
}


export const endedPollFailure = ()=>{
    return({
        type:ENDED_POLL_FAILURE
    })
}







export const postPollData = (data,token)=>(dispatch)=>{
    // console.log("data post check",data)
dispatch(postPollDataRequest())
    return axios({
        method:"POST",
        url:"http://localhost:8080/firebase/create-poll",
        headers:{
          'Authorization' : `Bearer ${token}`
        },
        data
    })
    .then((res)=>{
        // console.log("Posted poll data",res.data)
        dispatch(postPollDataRequest());
    })
    .catch((error)=>{
     dispatch(postPollDataFailure(error))
    })
} 




export const addTemplateData = (data,token)=>(dispatch)=>{
    // console.log("data check",data)
dispatch(addTemplateDataRequest())
    return axios({
        method:"POST",
        url:"http://localhost:8080/template/save-template",
        headers:{
          'Authorization' : `Bearer ${token}`
        },
        data
    })
    .then((res)=>{
        // console.log("Template added",res.data)
        dispatch(addTemplateDataSuccess());
    })
    .catch((error)=>{
     dispatch(addTemplateDataFailure(error))
    })
} 






export const getTemplateData = (token)=>(dispatch)=>{
    
dispatch(getTemplateDataRequest())
    return axios({
        method:"GET",
        url:"http://localhost:8080/user/user-details",
        headers:{
          'Authorization' : `Bearer ${token}`
        }
    })
    .then((res)=>{
        // console.log("Template data received",res.data)
        dispatch(getTemplateDataSuccess(res.data));
    })
    .catch((error)=>{
     dispatch(getTemplateDataFailure(error))
    })
} 




export const getTemplateByIdData = (id,token)=>(dispatch)=>{
    
dispatch(getTemplateByIdDataRequest())
    return axios({
        method:"GET",
        url:`http://localhost:8080/template/get-template/${id}`,
        headers:{
          'Authorization' : `Bearer ${token}`
        }
    })
    .then((res)=>{
        // console.log("template by id",res.data)
        dispatch(getTemplateByIdDataSuccess(res.data));
    })
    .catch((error)=>{
     dispatch(getTemplateByIdDataFailure(error))
    })
} 





export const getAllData = (token)=>(dispatch)=>{
    // console.log("token",token)
dispatch(getAllDataRequest())
    return axios({
        method:"GET",
        url:"http://localhost:8080/user/user-details",
        headers:{
          'Authorization' : `Bearer ${token}`
        }
    })
    .then((res)=>{
        // console.log("get all data",res.data)
        dispatch(getAllDataSuccess(res.data));
    })
    .catch((error)=>{
     dispatch(getAllDataFailure(error))
    })
} 

export const getLiveData = (token)=>(dispatch)=>{
    dispatch(getLiveDataRequest())
        return axios({
            method:"GET",
            url:"http://localhost:8080/firebase/live-polls",
            headers:{
              'Authorization' : `Bearer ${token}`
            }
        })
        .then((res)=>{
            // console.log("get live data",res.data)
            dispatch(getLiveDataSuccess(res.data));
            
        })
        .catch((error)=>{
         dispatch(getLiveDataFailure(error))
        })
    } 






    export const stopPoll = (data,token)=>(dispatch)=>{
        dispatch(stopPollRequest())
            return axios({
                method:"POST",
                url:"http://localhost:8080/poll/save-poll",
                headers:{
                  'Authorization' : `Bearer ${token}`
                },
                data
            })
            .then((res)=>{
                // console.log("poll status changed",res.data)
                dispatch(stopPollSuccess());
            })
            .catch((error)=>{
             dispatch(stopPollFailure(error))
            })
        } 
        
        
    export const endedPoll = (token)=>(dispatch)=>{
        dispatch(endedPollRequest())
            return axios({
                method:"GET",
                url:"http://localhost:8080/poll/ended-polls",
                headers:{
                  'Authorization' : `Bearer ${token}`
                }
            
            })
            .then((res)=>{
                // console.log("ended polls",res.data)
                dispatch(endedPollSuccess(res.data));
            })
            .catch((error)=>{
             dispatch(endedPollFailure(error))
            })
        } 


        // /poll/ended-polls