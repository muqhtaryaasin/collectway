import {uiDataMessage} from "../index.js";

let typeColorMap = new Map([
    ['SUCCESS', '#a6f49d'],
    ['INFO', '#fefefe'],
    ['ERROR', '#f49696']
  ]);

/**
 * find the correct message in to display.
 * @param {*} code 
 * @returns 
 */
export function getUImessage(msg){
    let message;
    message = uiDataMessage.find(obj => obj.code === msg.code);
    if(message !== undefined){
        return message;
    }

    return null;
}

/**
 * update message for message dialog box.
 * @param {*} msg 
 */
export function updateUImessageDialog(msg){
    const displayMsg = getUImessage(msg);

    if(displayMsg !== null){
        const myModel = document.getElementById('myModal');
        myModel.style.display = 'block';
        const pElement = myModel.querySelector('p');
        pElement.innerHTML = displayMsg.msg;

        const span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            myModel.style.display = "none";
        }

        const msgContent = document.getElementById('msgContent');
        msgContent.style.backgroundColor = typeColorMap.get(displayMsg.type);
    }else{
        console.log("Error in Message Dialog Box");
    }
}