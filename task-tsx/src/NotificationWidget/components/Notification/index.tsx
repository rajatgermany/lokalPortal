import React, { Component } from 'react';
import cn from 'classnames'

import { INotificationData } from '../../index'
import ModalNotification from './components/ModalNotification'
import ToastNotification from './components/ToastNotification'
import  './index.css'

const TIMEOUT = 10000

interface INotification {
  notificationData: INotificationData
  removeNotification?: any
}

interface IState{
  show: boolean
}
export class Notification extends Component<INotification, IState> {
    constructor(props:INotification){
      super(props)
      this.state = {
        show: true
      }

    }
    componentDidMount() {
      const {notificationData:{container}} = this.props

      if(container === 'toast') {
        setTimeout(() => {
          this.setState({show: false})
        }, TIMEOUT);   
      } 
     
    }

    renderNotification() {
      const { notificationData, removeNotification } = this.props
      const { container, message, position, id, notification} = notificationData

      const notificationClassName = cn({
        'notification-error': notification == 'error',
        'notification-warning': notification == 'warning',
        'notification-info': notification == 'info',
        'notification-bottom-left': position == 'bottomLeft',
        'notification-bottom-right': position == 'bottomRight',
        'notification-top-left': position == 'topLeft',
        'notification-top-right': position == 'topRight'
      })

      return container === 'toast' ?
       <ToastNotification message = { message } classname= {notificationClassName}/> :
       <ModalNotification
        message = {message} 
        removeNotification = {() => removeNotification(id)}
        classname={notificationClassName}
        />
    }

    render() {
      if (!this.state.show) {
        return null
      }
      return (
          <React.Fragment>
            {this.renderNotification()}
          </React.Fragment>
      )
    }
  }
