import { Input } from "./components/Input";
import { LabelBox } from "./components/LabelBox";

function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '10px',
      }}>
        <Input />
        <Input />
      </div>

      <div style={{
        display: 'flex',
      }}>
        <LabelBox
          textTop="text"
          textBottom="text"
        />
      </div>

    </div>
  );
}

export default App;
