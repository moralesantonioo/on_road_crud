import React, { useState }  from 'react';
import { UserService } from '../services/user.services'
import { Container, Title, Form, Input, Button } from '../styles/login.style'

export const RegisterUsers = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async () => {
        setLoading(true)
        const userService = new UserService();
        await userService.RegisterUser({
            email,
            password,
        })
        setLoading(false)
    }

    return (
        <Container>
            <Title>Registrar</Title>
            <Form>
                <Input placeholder="Email" type="email" onChange={(event) => { setEmail(event.target.value) }} />
                <Input placeholder="Password" type="password" onChange={(event) => { setPassword(event.target.value) }} />
                {loading ? <p>Cargando...</p> : <Button color="blue" onClick={submit}>Registrar</Button>}
            </Form>
        </Container>
    )
}