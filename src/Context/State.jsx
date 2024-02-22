import noteContext from "./Context";

const State = (props) => {
 
  return (
    <noteContext.Provider
      value={{  
        
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default State;
