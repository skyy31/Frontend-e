import React, { Component } from 'react';

type Props = {};
type State = {};

class ClassComponent extends Component<Props, State> {
    state: State = {};

    render() {
        return (
            <div>ClassComponent</div>
        );
    }
}

export default ClassComponent;
