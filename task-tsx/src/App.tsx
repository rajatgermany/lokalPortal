import React, { Component } from 'react';
import cn from 'classnames'

import './App.css';
import { Config } from './types'
import { NotificationWidget } from './NotificationWidget'


interface IApp {
  props: {}
}

class App extends Component {
  private notificationWidgetref = React.createRef<NotificationWidget>()
  constructor(props: IApp){
    super(props)
  }

  showNotification(config: Config): void {
    if(this.notificationWidgetref.current){
      this.notificationWidgetref.current.showNotification(config)
    }
  }
  
  render() {
    return (
      <div className="app">
      <NotificationWidget ref= {this.notificationWidgetref} />
      
      {/*This button list can be moved to a new file as component along with its styles*/}
      <div className="button-list">
        <button 
          className={cn('btn', 'btn-error')}
          onClick ={() => this.showNotification({
            notification: 'error',
            message: 'this is error',
            container: 'toast',
            position: 'topLeft'
        })}>ErrorOnTopLeft</button>
        
      <button 
        className={cn('btn', 'btn-warning')}
        onClick ={() => this.showNotification({
            notification: 'warning',
            message: 'this is error',
            container: 'toast',
            position: 'topRight'
        })}>WarningOnTopRight</button>
      
      <button 
        className={cn('btn', 'btn-info')}
        onClick ={() => this.showNotification({
          notification: 'info',
          message: 'this is info',
          container: 'modal'
      })}>InfoOnModal</button>
      
      <button 
        className={cn('btn', 'btn-info')}
        onClick ={() => this.showNotification({
          notification: 'info',
          message: 'this is error',
          container: 'toast',
          position: 'bottomLeft'
      })}>InfoOnBottomLeft</button>
      
      <button 
        className={cn('btn', 'btn-warning')}
        onClick ={() => this.showNotification({
          notification: 'warning',
          message: 'this is warning',
          container: 'toast',
          position: 'bottomRight'
      })}>WarningOnBottomRight</button>

      <button
      className={cn('btn', 'btn-warning')} 
      onClick ={() => this.showNotification({
          notification: 'warning',
          message: 'this is warrning',
          container: 'toast',
          position: 'topLeft'
      })}>WarningOnTopLeft</button>
      
      <button
        className={cn('btn', 'btn-warning')} 
        onClick ={() => this.showNotification({
          notification: 'error',
          message: 'this is warning',
          container: 'modal'
      })}>WarningOnModal</button>
      
      <button
        className={cn('btn', 'btn-error')} 
        onClick ={() => this.showNotification({
          notification: 'error',
          message: 'this is error',
          container: 'toast',
          position: 'topRight'
      })}>ErrorOnTopRight</button>
      
      <button
        className={cn('btn', 'btn-info')} 
        onClick ={() => this.showNotification({
          notification: 'info',
          message: 'this is info',
          container: 'toast',
          position: 'topRight'
      })}>ErrorOnTopRight</button>
        </div>
    
    <ul className = 'task-info'>
      <li><span>Three types of notifications and specific button can be choosen to place them</span> </li>
      <li><span>To Show overlap of the notification press button 'ErrorOnTopLeft' and 'WarningOnTopLeft' </span></li>
      <li><span>Created a libary Notification Widget and used the element Reference to access it</span></li>
      <li><span>Libary at momemt provides two types of notification container : Toast and Modal</span></li>
      <li><span>Libary can be easily extended to adds more type of notification as well more types of containers</span></li>
      <li><span>For sample Toast notification: Press Button 1</span></li>
      <li><span>For sample Modal notification: Press Button 1 </span></li>
      </ul>
    </div>
    
    )
  }
}

export default App;
