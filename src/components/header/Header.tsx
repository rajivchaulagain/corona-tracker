import React from 'react'
import { Card } from 'react-bootstrap'

interface Props {
    title: string,
    totalCase: number,
    variant: string
};

const Header = (props: Props) => {
    return (
        <Card
            bg={props.variant}
            text={props.variant === 'light' ? 'dark' : 'white'}>
            <Card.Body className='text-center'>
                <h2 className="text-capitalize">{props.title}</h2>
                <h5>
                    {props.totalCase}
                </h5>
            </Card.Body>
        </Card>
    )
}

export default Header