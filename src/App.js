import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const onClick = () => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
