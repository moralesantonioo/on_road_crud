import styled from 'styled-components';
import { Tag } from 'antd';

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
    font-size: 35px;
    font-weight: bold;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Input = styled.input`
    width: 300px;
    height: 40px;
    outline: none;
    margin: 0 0 10px 0;
    border: 1px solid #000;
`


export const Button = styled(Tag)`
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    cursor: pointer;
`