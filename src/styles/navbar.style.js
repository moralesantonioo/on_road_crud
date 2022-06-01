import styled from 'styled-components';
import { Tag } from 'antd';

export const NavbarStyle = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000;
    padding: 0 15px;
`

export const ButtonLogout = styled(Tag)`
   padding: 5px 10px;
   cursor: pointer;
`