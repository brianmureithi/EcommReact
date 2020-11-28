import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink
,SideBtnWrap,SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
                </Icon>
                <SidebarMenu>
            <SidebarLink to="/">Web Design Services</SidebarLink>
            <SidebarLink to="/">Graphic Design Services</SidebarLink>
            <SidebarLink to="/">Android Apps Services</SidebarLink>
            <SidebarLink to="/">Gov Services</SidebarLink>
                   
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/">Request services</SidebarRoute>
                        </SideBtnWrap>

        </SidebarContainer>
    )
}

export default Sidebar
