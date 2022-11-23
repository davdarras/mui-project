import { createApiClient } from "core/api";
import type { ApiClientType } from "core/api/createApiClient";
import { createContext, PropsWithChildren, useContext } from "react";

export const CoreApiContext = createContext<ApiClientType | undefined>(
  undefined
);

export function useApiContext() {
  const context = useContext(CoreApiContext);
  // If context is undefined, we know we used CoreApiContext
  // outside of our provider so we can throw a more helpful
  // error!
  if (context === undefined) {
    throw Error(
      "CoreApiContext must be used inside of a RadioGroup, " +
        "otherwise it will not function correctly."
    );
  }

  // Because of TypeScript's type narrowing, if we make it past
  // the error the compiler knows that context is always defined
  // at this point, so we don't need to do any conditional
  // checking on its values when we use this hook!
  return context;
}

export const CoreProvider = ({ children }: PropsWithChildren) => {
  const apiUrl = "http://localhost:8080/api/";
  const apiClient = createApiClient(apiUrl);

  return (
    <CoreApiContext.Provider value={apiClient}>
      {children}
    </CoreApiContext.Provider>
  );
};
