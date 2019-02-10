import * as React from 'react'
import cn from 'classnames'

import './index.css'

interface IModalNotification {
    message: string
    removeNotification: any
    classname: string
}

const ModalNotification = ({
    message,
    removeNotification,
    classname
}: IModalNotification) => {
    const containerClassName = cn(classname, 'modal-container')
    return(
        <div className = {containerClassName}>
            <h2>{message}</h2>
            <button onClick={removeNotification}>Cancel</button>
        </div>
    )
}

export default ModalNotification