import React, { useState, useRef, useEffect } from 'react';
import { Input } from "./components/Input";
import { LabelBox } from "./components/LabelBox";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const state = useSelector(state => state);
  const data = state.data;
  const currentItem = state.currentItem;

  const [topValue, setTopValue] = useState(currentItem.topText);
  const [bottomValue, setBottomValue] = useState(currentItem.bottomText);

  console.log('Current state:', state);

  const currentItemChange = (id, topText, bottomText) => {
    dispatch({
      type: 'CURRENT_ITEM_CHANGE',
      id,
      topText,
      bottomText
    });

    setTopValue(topText);
    setBottomValue(bottomText);
  };

  const handleChange = (event, input) => {
    if (input === 'top') {
      setTopValue(event.target.value);
      currentItemChange(currentItem.id, event.target.value, currentItem.bottomText);
    }
    if (input === 'bottom') {
      setBottomValue(event.target.value);
      currentItemChange(currentItem.id, currentItem.topText, event.target.value);
    }
  };

  const containerRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const handleWheelScroll = (event) => {
      if (isMouseOver && containerRef.current) {
        const scrollDelta = Math.sign(event.deltaY);
        containerRef.current.scrollLeft += scrollDelta * 40;
        event.preventDefault();
      }
    };

    const handleMouseEnter = () => {
      setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
    };

    window.addEventListener('wheel', handleWheelScroll);
    containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
      containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMouseOver]);

  return (
    <div className="App">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '10px 0 20px 0',
      }}>
        <Input
          value={topValue}
          handleChange={(e) => handleChange(e, 'top')}
        />
        <Input
          value={bottomValue}
          handleChange={(e) => handleChange(e, 'bottom')}
        />
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll',
        padding: '15px 0 15px',
      }}
        className="horizontal-scroll-container"
        ref={containerRef}
      >
        <div style={{
          display: 'flex',
        }}>
          {Object.keys(data).slice(0, 23).map(id => {
            return (
              <LabelBox
                textTop={data[id].topText}
                textBottom={data[id].bottomText}
                key={id}
                labelTop={id}
                onElementClick={() => currentItemChange(id, data[id].topText, data[id].bottomText)}
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
                textTop={data[id].topText}
                textBottom={data[id].bottomText}
                key={id}
                labelBottom={id}
                onElementClick={() => currentItemChange(id, data[id].topText, data[id].bottomText)}
              />
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
