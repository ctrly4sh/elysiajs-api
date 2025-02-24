import ResponseHandler from '../utils/ResponseHandler'
import { Codes, Messages } from '../utils/httpCodesAndMessages'

export const getHealth = ({ store, set }: any) => {

  console.log("Profile", store.profile)
  
  if (!store.profile) {
    set.status = 200; 
    return { success: true, message: "Server is healthy (unauthenticated)" };
  }

  set.status = 200; 

  return ResponseHandler.sendSuccess(
    set,
    store.profile,
    Codes.OK,
    "Serve Health Okay"
  );
  

};

