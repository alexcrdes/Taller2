import { createContext } from "react";
import { useState } from "react";

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {

    const [list, setList] = useState([]);

    return (
      <FavoriteContext.Provider value={[list, setList] }>
        {children}
      </FavoriteContext.Provider>
    )
  }

export {FavoriteProvider};
export default FavoriteContext;