import React, { useContext, useReducer } from "react";

const DataLayerContext = React.createContext();

const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);

export { DataLayerContext, DataLayer };
