import tw from "twin.macro";
import styled from "styled-components";

export const StyledAppContainer = tw.div`relative max-w-7xl mx-auto pb-6 min-h-screen grid items-center grid-cols-site grid-rows-site`

export const CounterListItem = styled.li`
    counter-increment: item 1;
  ${tw`before:font-medium before:text-green before:mr-1 hover:text-white`}
  &:before {
    content: '0' counter(item) '.';
  }
`


export const StyledSpan = tw.span`text-green`
export const StyledLink = tw.a`self-start text-green border border-green px-2 py-2 rounded hover:bg-teal-100 hover:bg-opacity-10 transition-opacity duration-300`
