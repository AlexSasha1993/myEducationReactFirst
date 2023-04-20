import React from 'react'

interface ErrorMessegeProps {
    error: string
}

export function ErrorMessege({ error }: ErrorMessegeProps) {

    return (
        <p className='text-center text-red-600'>{error}</p>
    )
}

