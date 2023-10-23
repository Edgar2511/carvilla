import styled from "styled-components";

export const StyledNavbar = styled.nav<{ type: "primary" | "secondary" }>`
  width: 100%;
  background-color: ${(props) =>
    props.type === "primary" ? props.theme.bgMain : props.theme.bgSecondary};
  position: fixed;
  z-index: 10;
`;

export const StyledDiv = styled.div<{ withBackground?: boolean }>`
  background-color: ${(props) => props.withBackground && "black"};
  color: ${(props) => props.withBackground && "white"};
`;
