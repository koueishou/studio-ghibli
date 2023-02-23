import styled, { keyframes } from "styled-components";

import StudioGhibliOld from "../../assets/images/Studio_Ghibli_old.webp";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Sidebar = styled.div`
  width: 352px;
  background-color: #f7f7f7;
  border-right: solid 1px #e3e3e3;
  display: flex;
  flex-direction: column;

  & > * {
    padding-left: 32px;
    padding-right: 32px;
  }

  & h1 {
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 16px 32px;
    border-top: 1px solid #e3e3e3;
    order: 1;
    line-height: 1;
  }

  & h1::before {
    content: "";
    display: inline-block;
    background-image: url(${StudioGhibliOld});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 55px;
    height: 20px;
    margin-right: 8px;
    position: relative;
    top: 1px;
  }

  & > div {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e3e3e3;
  }

  & > div form {
    position: relative;
  }

  & > div form input[type="search"] {
    width: 100%;
    padding-left: 32px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 10px 12px;
    background-size: 16px;
    position: relative;
  }

  & > div form input[type="search"].loading {
    background-image: none;
  }

  /* NAV */
  & nav {
    flex: 1;
    overflow: auto;
    padding-top: 16px;
  }

  & nav a span {
    float: right;
    color: #eeb004;
  }
  & nav a.active span {
    color: inherit;
  }

  i {
    color: #818181;
  }
  & nav .active i {
    color: inherit;
  }

  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  & li {
    margin: 4px 0;
  }

  & nav a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    white-space: pre;
    padding: 8px;
    border-radius: 8px;
    color: inherit;
    text-decoration: none;
    gap: 16px;
  }

  & nav a:hover {
    background: #e3e3e3;
  }

  & nav a.active {
    background: hsl(224, 98%, 58%);
    color: white;
  }

  & nav a.pending {
    color: hsl(224, 98%, 58%);
  }
`;

export const SearchSpinner = styled.div`
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 4v5h-.582m0 0a8.001 8.001 0 00-15.356 2m15.356-2H15M4 20v-5h.581m0 0a8.003 8.003 0 0015.357-2M4.581 15H9' /%3E%3C/svg%3E");
  animation: ${spinAnimation} 1s infinite linear;
  position: absolute;
  left: 10px;
  top: 12px;
`;

export const Input = styled.input`
  font-size: 16px;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  line-height: 1.5;
  margin: 0;

  &:hover {
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  }
`;

export const SrOnly = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const Detail = styled.div`
  flex: 1;
  padding: 32px 64px;
  width: 100%;
  overflow-y: scroll;

  &.loading {
    opacity: 0.25;
    transition: opacity 200ms;
    transition-delay: 200ms;
  }
`;
