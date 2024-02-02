import Messanger from "./Components/Chat/Messanger";

import { Provider } from 'react-redux'
import store from "./redux/store";

function App() {


  return (

    <Provider store={store}>
      <div className="App">
        <Messanger />
      </div>
    </Provider>

  );
}

export default App;
