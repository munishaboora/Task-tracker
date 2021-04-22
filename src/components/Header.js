import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header' >
            <h1>{title}</h1>
            <Button text={showAdd ? 'Close' : 'Add task'} onClick={onAdd} />
        </header >
    )
}

//Props
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS Styling in JS
const headingStyle = {
    color: '#474B49'
}

export default Header;
