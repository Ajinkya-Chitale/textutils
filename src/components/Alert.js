import React from 'react'

export default function Alert(props) {
    const captialize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'58px',backgroundColor:`${props.mode === 'dark' ? '#0b6174' : 'white'}`,color:`${props.mode === 'dark' ? 'white' : 'black'}`}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mb-0`} role="alert">
        <strong>{captialize(props.alert.type)}:</strong> {props.alert.msg}
        </div>}
    </div>
  )
}
