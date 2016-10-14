const React = require('react');
const ReactDOM = require('react-dom');
const Xray = require('x-ray');
const x = Xray();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {keyBindings: []};
  }

  componentDidMount() {
    x('https://code.visualstudio.com/docs/customization/keybindings', 'tbody tr', [{
      key: '[data-osx]@data-osx',
      description: 'td:nth-child(2)'
    }])
    ((err, keyBindings) => {
      keyBindings = keyBindings.filter((keyBinding) => {
        return keyBinding.key;
      })
      this.setState({keyBindings});
    });
  }

  render() {
    const lis = this.state.keyBindings.map((keyBinding) => {
      return (
        <li key={keyBinding.description} className="keyBinding">
          {keyBinding.key}: {keyBinding.description}
        </li>
      )
    })

    return (
      <ul>{lis}</ul>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
