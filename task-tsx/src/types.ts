import { string } from "prop-types";

export type notificationType =  {
    notification: 'error' | 'warning' | 'info'
}
export type containerType = {
    container: 'toast' | 'modal' 
}
export type messageType = {
    message: string
}
export type positionType = {
    position?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' 
}

export interface Config extends notificationType, positionType, messageType, containerType {

}