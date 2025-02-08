import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        color: inherit;
        text-decoration: none;
        font-family: "Moneygraphy";
        user-select: none;

        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        min-height: 100vh;
    }

    #root {
        width: 100%;
        min-height: 100vh;
    }
`;
