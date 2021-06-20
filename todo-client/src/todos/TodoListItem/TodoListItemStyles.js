import styled, { css } from 'styled-components';

export const TodoItemContainer = styled.div`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 86400000 * 5)
        ? "none"
        : "2px solid red"
    )};
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

export const TodoContainerHeader = styled.h3`
    text-decoration: ${props =>
        props.isCompleted ? "line-through" : "none"
    };
`;

export const ButtonsContainer = styled.div`
position: absolute;
right: 12px;
bottom: 12px;
`;

const buttonStyles = css`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`;

export const CompletedButton = styled.button`
    ${buttonStyles}
    display: inline-block;
    background-color: #22ee22;
`;

export const RemoveButton = styled.button`
    ${buttonStyles}
    display: inline-block;
    background-color: #ee2222;
    margin-left: 8px;
`;