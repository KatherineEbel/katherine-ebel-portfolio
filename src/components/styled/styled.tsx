import tw from "twin.macro";
import styled from "styled-components";
import {AsideProps} from "../Aside";

export const StyledAppContainer = tw.div`relative min-h-screen grid grid-cols-site grid-rows-site`

type StyledAsideProps = Omit<AsideProps, 'children'>

const StyledAside = tw.aside`sticky bottom-0 flex flex-col items-center gap-4 mt-auto row-span-1 row-start-2 col-span-1 text-slate hover:text-lightest-slate`

export const StyledAsidePickSide = styled(StyledAside)<StyledAsideProps>`
    ${({side}) => side === 'left' ? tw`col-start-1` : tw`col-start-3`}
`
