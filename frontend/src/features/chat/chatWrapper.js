import styled from 'styled-components';

const StyledChat = styled.div`
  .chat-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #000;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
  }

  .chat-header {
    background: #1a1a1a;
    border-bottom: 1px solid #333;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .logout-button {
    background: #1d9bf0;
    color: #fff;
    border: none;
    padding: 6px 12px;
    border-radius: 9999px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background: #1a8cd8;
    }
  }

  .chat-main {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .chat-sidebar {
    width: 250px;
    background: #000;
    border-right: 1px solid #333;
    padding: 16px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    @media (max-width: 768px) {
      position: fixed;
      height: 100%;
      z-index: 1000;
    }
  }

  .channels-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    font-weight: 700;
    color: #fff;
  }

  .channel-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dropdown-toggle {
    background: none !important;
    color: #fff;
    border: none;
    box-shadow: none;

    &:hover {
      background-color: rgba(13, 19, 23, 0.2);
      color: #1a8cd8;
    }

    &:focus {
      box-shadow: none;
    }
  }

  .dropdown-menu {
    background-color: #000;
    border: 1px solid #333;

    .dropdown-item {
      color: #fff;
      background-color: #000;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #f0f3f5;
      }
    }
  }

  .add-channel {
    background: transparent;
    color: #1d9bf0;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      color: #1a8cd8;
    }
  }

  .channels-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .channel {
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
    color: #71767b;

    &.active {
      background: #1a1a1a;
      color: #fff;
    }

    &:hover {
      background: #1a1a1a;
      color: #fff;
    }
  }

  .chat-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #000;
    padding: 20px;

    @media (max-width: 768px) {
      margin-left: 250px;
      width: calc(100% - 250px);
    }
    @media (max-width: 480px) {
      margin-left: 0;
      width: 100%;
    }
  }

  .chat-title {
    border-bottom: 1px solid #333;
    padding-bottom: 8px;
    margin-bottom: 16px;

    h2 {
      margin: 0;
      font-size: 20px;
      color: #fff;
    }

    span {
      color: #71767b;
      font-size: 14px;
    }
  }

  .messages-area {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 16px;
  }

  .message-form {
    display: flex;
    gap: 10px;
    border-top: 1px solid #333;
    padding-top: 10px;
  }

  .message-input {
    flex: 1;
    padding: 10px 14px;
    border-radius: 9999px;
    border: 1px solid #333;
    font-size: 14px;
    background: #1a1a1a;
    color: #fff;
    outline: none;

    &::placeholder {
      color: #71767b;
    }
  }

  .send-button {
    background: #1d9bf0;
    border: none;
    color: white;
    font-size: 18px;
    padding: 0 14px;
    border-radius: 9999px;
    cursor: pointer;

    &:hover {
      background: #1a8cd8;
    }
  }
`;

export default StyledChat;
