import * as React from 'react'
import './index.css'
import cn from 'classnames'

interface IToastNotification {
    message: string
    classname: string
}
const ToastNotification = ({
    message,
    classname
}: IToastNotification) => {
    const containerClassName = cn('toast-container', classname)
    return(
        <div className = {containerClassName}>
            <p>{message}</p>   
        </div>
    )


}

export default ToastNotification