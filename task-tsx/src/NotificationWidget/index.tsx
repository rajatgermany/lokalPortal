import React, { Component } from 'react';

import { Notification } from './components/Notification'
import { generateId } from './helpers'
import { Config } from '../types'

export interface INotificationData extends Config {
    id: string
}

interface IState {
    notificationsData: INotificationData[]
}

interface IProps {
    props: {}
}

export class NotificationWidget extends Component<any, IState> {
    constructor(props: IProps){
        super(props)
        this.state = {
            notificationsData: []
        }  
    }

    showNotification(config: Config) : void {
        const notification = {...config, id: generateId()}
        const { notificationsData } = this.state
        notificationsData.push(notification)
        this.setState({notificationsData})
    }
    
    removeNotification(id: string) : void {
        const notificationsData = this.state.notificationsData.filter(
            (notification : INotificationData) => notification.id != id)

        this.setState({notificationsData})
    }

    render() {
        return(
            <React.Fragment>
              {
                  this.state.notificationsData.map((notficationData: INotificationData) =>
                  <Notification 
                    notificationData ={notficationData} 
                    key={notficationData.id}
                    removeNotification={this.removeNotification.bind(this)} 
                  />)
              }
            </React.Fragment>
        ) 
    }

}