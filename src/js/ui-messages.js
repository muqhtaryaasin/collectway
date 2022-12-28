import {uiDataMessage} from "../index.js";
export function getUImessage(code){
    let message;
    message = uiDataMessage.find(obj => obj.code === code);
    if(message !== undefined){
        return message.msg;
    }else{
        message = uiDataMessage.find(obj => obj.code === "default");
        return message.msg;
    }
}