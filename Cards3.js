import React from 'react';

const Card = (props) => {
  return (
    <div style={{ width: '30%', display: 'inline-block', margin: '16px' }}>
      <img src={props.image} style={{ width: '100%' }} />
      <div style={{ padding: '16px' }}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card
        image="https://via.placeholder.com/300x200"
        title="Card 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        image="https://via.placeholder.com/300x200"
        title="Card 2"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        image="https://via.placeholder.com/300x200"
        title="Card 3"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};

export default App;
