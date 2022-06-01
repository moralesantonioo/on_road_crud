import React, { useState } from 'react';
import { UserService } from '../services/user.services'
import { Container, Title, Form, Input, Button } from '../styles/login.style'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async () => {
        setLoading(true)
        const userService = new UserService();
        await userService.authWithEmailPassword({
            email,
            password,
        })
        setLoading(false)
    }


    return (
        <Container>
            <Title>Iniciar Sesión</Title>
            <Form>
                <Input placeholder="Email" type="email" onChange={(event) => { setEmail(event.target.value) }} />
                <Input placeholder="Password" type="password" onChange={(event) => { setPassword(event.target.value) }} />
                { loading ? <p>Cargando...</p> : <Button onClick={submit}>Ingresar</Button> } 
            </Form>
        </Container>
    )
}