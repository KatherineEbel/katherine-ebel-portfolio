import * as React from "react";
import {ReactNode} from "react";
import {StyledAsidePickSide} from "./styled/styled";

export interface AsideProps {
    children: ReactNode
    side: 'left' | 'right'
}

export default function Aside({ children, side }: AsideProps) {
    return (
        <StyledAsidePickSide side={side}>
            {children}
            <div className='h-36 w-[2px] bg-slate'/>
        </StyledAsidePickSide>
    )
}