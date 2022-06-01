import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Input = styled.input`
    width: 250px;
    height: 30px;
    outline: none;
    margin: 0 0 10px 0;
`

export const Button = styled.div`
    background: #5099F5;
    color: #fff;
    width: 150px;
    height: 30px;
    margin: 0 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`