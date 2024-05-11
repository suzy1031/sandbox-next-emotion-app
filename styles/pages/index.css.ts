import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const title = css`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

export const container = css(`
  padding: 0 2rem;
`);

export const main = css(`
min-height: 100vh;
padding: 4rem 0;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`);

export const grid = css(`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`);

export const gridStyle = css`
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const code = css(`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;

  @media (prefers-color-scheme: dark) {
    border-color: #111;
  }
`);

export const card = css(`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #222;
  }
`);

export const footer = css(`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #222;
  }
`);

// オブジェクトstyle
export const logo = css({
  height: "1em",
  marginLeft: "0.5rem",
});

// emotion styled-components
export const Description = styled.p`
  text-align: center;
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;
