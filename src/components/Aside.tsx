import * as React from "react";
import {ReactNode} from "react";
import tw from "twin.macro";
import styled from "styled-components";

type StyledAsideProps = Omit<AsideProps, 'children'>

const StyledAside = tw.aside`hidden md:flex md:flex-col md:items-center gap-4 self-end row-span-1 row-start-3 col-span-1 text-slate hover:text-lightest-slate`

export const Wrapper = styled(StyledAside)<StyledAsideProps>`
    ${({side}) => side === 'left' ? tw`col-start-1` : tw`col-start-3`}
`

export interface AsideProps {
    children: ReactNode
    side: 'left' | 'right'
}

export default function Aside({ children, side }: AsideProps) {
    return (
        <Wrapper side={side}>
            {children}
            <div className='h-24 w-[2px] bg-slate'/>
        </Wrapper>
    )
}