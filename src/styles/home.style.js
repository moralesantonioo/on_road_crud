import styled from 'styled-components';
import { Tag } from 'antd';

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 10px;
`

export const Tags = styled(Tag)`
   padding: 5px 10px;
   cursor: pointer;
`

export const ButtonStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Title = styled.span`
    font-size: 15px;
    font-weight: bold;
`