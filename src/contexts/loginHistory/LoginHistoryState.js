import { useState } from 'react';
import LoginHistoryContext from '.';

const LoginHistoryState = ({ children }) => {
  const [historyMap, setHistoryMap] = useState({});

  const addHistory = (username, type) => {
    debugger;
    const newHistoryObject = { ...historyMap };
    const newHistory = newHistoryObject[username]
      ? [...newHistoryObject[username]]
      : [];
    newHistory.push({
      username,
      type,
      dateTime: new Date(),
    });
    newHistoryObject[username] = newHistory;
    setHistoryMap(newHistoryObject);
  };
  const clearHistory = (username) => {
    const newHistoryObject = { ...historyMap };
    delete newHistoryObject[username];
    setHistoryMap(newHistoryObject);
  };
  const getHistory = (username) => {
    return historyMap[username];
  };

  return (
    <LoginHistoryContext.Provider
      value={{
        getHistory,
        addHistory,
        clearHistory,
      }}
    >
      {children}
    </LoginHistoryContext.Provider>
  );
};

export default LoginHistoryState;
