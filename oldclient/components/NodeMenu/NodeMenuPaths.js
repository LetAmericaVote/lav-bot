import React from 'react';
import Card from '../Card';

class NodeMenuPaths extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodeId: '',
      keyword: '',
    };

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput({ target }) {
    this.setState({ [target.name]: target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { addPath } = this.props;
    const { keyword, nodeId } = this.state;

    if (! keyword || ! nodeId) return;

    addPath(this.props.nodeId, nodeId, keyword);
  }

  render() {
    const { addPath, nodeId, paths, showNodeMenu, removePath } = this.props;
    return (
      <div className="node-menu__paths">
        <h1>Paths</h1>
        <form className="node-menu__fields" onSubmit={this.onSubmit}>
          <div className="input-group">
            <label>Node ID</label>
            <input onChange={this.onInput} value={this.state.nodeId} name="nodeId" type="text" />
          </div>
          <div className="input-group">
            <label>Keyword</label>
            <input onChange={this.onInput} value={this.state.keyword} name="keyword" type="text" />
          </div>
          <button type="submit">Add path</button>
        </form>
        {paths ? Object.keys(paths).map(keyword => (
          <a key={keyword} onClick={() => showNodeMenu(paths[keyword])}>
            <Card classes="-rounded -padded -outline -white-bg -margin">
              <p><span className="bold">keyword: </span>{ keyword }</p>
              <button className="-tertiary" onClick={() => removePath(nodeId, keyword)}>remove keyword</button>
            </Card>
          </a>
        )) : null}
      </div>
    );
  }
}

export default NodeMenuPaths;
