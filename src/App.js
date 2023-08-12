import { Input } from "./components/Input";
import { LabelBox } from "./components/LabelBox";
import { connect, useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state);

  const handleTextChange = (id, field, value) => {
    dispatch({
      type: 'UPDATE_TEXT',
      id,
      [field]: value
    });
  };

  return (
    <div className="App">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '10px 0 20px 0',
      }}>
        <Input />
        <Input />
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll',
        padding: '15px 0 15px',
      }}>
        <div style={{
          display: 'flex',
        }}>
          {Object.keys(data).slice(0, 23).map(id => {
            return (
              <LabelBox
                textTop="text"
                textBottom="text"
                key={id}
                labelTop={id}
              />
            )
          })}
        </div>
        <div style={{
          display: 'flex',
        }}>
          {Object.keys(data).slice(24, 47).map(id => {
            return (
              <LabelBox
                textTop="text"
                textBottom="text"
                key={id}
                labelBottom={id}
              />
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
