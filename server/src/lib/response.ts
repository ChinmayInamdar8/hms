export class ResponseMessage{
    static userNotFound = {
        status:404,
        res:{
            message:"The user is not present"
        }
    }
    static PayloadValidationFailed = {
        status:400,
        res:{
            message:"Required fields are missing."
        }
    }
    static passwordDidNotMatched = {
        status:401,
        res:{
            message:"Password is incorrect"
        }
    }
    static userAlreadyPresent = {
        status:409,
        res:{
            message:"User is already present"
        }
    }
}