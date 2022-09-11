import React, { useState } from "react";

import MainApp from "./components/MainApp"
import Help from "./components/Help"

const App = () => {

  const [help, selectHelp] = useState(true)

  return (
    <div>
      {help ? <Help functionRef={selectHelp} /> : <MainApp functionRef={selectHelp} />}
    </div>
  )

}


export default App;
