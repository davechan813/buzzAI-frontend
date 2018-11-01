import React from 'react';

class BuzzwordLink extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const { url, word, onClick } = this.props;

        return (
            <a onClick={onClick}>{word}</a>
        );
    }
}

export default (BuzzwordLink);