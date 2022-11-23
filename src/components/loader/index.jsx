import { Spin } from 'antd'
import React from 'react'
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';


const CustomLoader = ({loading,style,className,children}) => {
    return (
        <Spin indicator = {<SpinnerIcon pulse style = {{fontSize:"2rem"}} />} spinning = {loading} style = {style} className = {className} >
            {children}
        </Spin>
    )
}

export default CustomLoader