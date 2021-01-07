// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import styled from 'styled-components';

const Digits = styled.section`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  text-align: center;
`;

const Component = ({ }) => {
  return <Digits> 44.44 </Digits>;
}

export default {
  render: (id) => {
    ReactDOM.render(
      React.createElement(Component,{}),
      document.getElementById(id));
  }
};
