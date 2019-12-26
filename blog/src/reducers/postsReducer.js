export default (state = [],action) =>
{
    // //if you do not have a return statement then the functtion returns undefined
    // if(action.type === 'FETCH_POSTS')
    // {
    //     return action.payload;

    // }

    // return state;

    switch(action.type)
    {
        case "FETCH_POSTS" :
            return action.payload;
        default :
            return state;

    }




};

 

