import React from 'react';
import PropTypes from 'prop-types';

// PropTypes are used to validate the data type of the props passed to the component

function Header({title, subtitle}) {
    return (
        <section>
            <h1 data-testid="test-title">{title}</h1>
            <h2>{subtitle}</h2>
            <h2>{subtitle}</h2>
            <h2>{subtitle}</h2>
        </section>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

// Default props are used to set default values for the props if they are not passed to the component

Header.defaultProps = {
    title: 'Default title',
    subtitle: 0
}

export default Header;