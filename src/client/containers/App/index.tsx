import React from 'react';
import { fetchHelloWorld } from '../../apiCalls';
import { AppContainer } from './styled';
import { AppProps as IProps, AppState as IState } from './types';

class App extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      helloWorld: null,
    };
  }

  componentDidMount() {
    fetchHelloWorld().then((res) => res.json().then((data) => this.setState({ helloWorld: data.message })));
  }

  render() {
    return (
      <AppContainer>
        {this.state.helloWorld}
      </AppContainer>
    );
  }
}

export default App;
