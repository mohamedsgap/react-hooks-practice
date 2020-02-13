import React, { useRef } from 'react'

export const Button = React.memo(({counterFn, label, n}) => {
    const renderRef = useRef(0);
    console.log(renderRef.current +1)
    return (
        <div>
            <button onClick={()=>counterFn(n)}>{label}</button>
        </div>

    )
});