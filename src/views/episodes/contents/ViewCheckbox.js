import React from 'react'
import { Checkbox } from 'antd';

function ViewCheckbox({datos}) {
    return (
        <>
        {datos.map((item) => (
            <>
            <Checkbox value={item.name}>{item.name}</Checkbox>
            </>
        ))}
        </>
    )
}

export default ViewCheckbox
