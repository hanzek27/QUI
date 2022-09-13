import React from 'react'

function getValue(key, initValue) {
    const localValue = JSON.parse(localStorage.getItem(key))
    if (localValue) return localValue
    if (initValue instanceof Function) return initValue()
    return initValue
}

export default function useLocalStorage(key, initValue) {
    const [data, setData] = React.useState(()=>{
        return getValue(key, initValue)
    })

    React.useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(data))
    },[data])

    return [data, setData]
}