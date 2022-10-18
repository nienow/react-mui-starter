import React, {ReactNode} from 'react';
import Head from 'next/head';
import Header from "./header/Header";
import SidebarMenu from "@/components/menu/SidebarMenu";
import styled from "@emotion/styled";

type Props = {
  children?: ReactNode
  title?: string
}

const MainContainer = styled.div`
  display: flex;
  height: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1 1 auto;
  padding: 10px;
`;


const Layout = ({children, title = 'React Typescript Starter'}: Props) => {
  return <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <Header></Header>
    <MainContainer>
      <SidebarMenu></SidebarMenu>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </MainContainer>

  </>
}

export default Layout
