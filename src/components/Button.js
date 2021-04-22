import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <button onClick={onClick} style={{ backgroundcolor: color }} className='btn'>
            {text}
        </button>
    )
}

Button.defualtProps = {
    color: '#919191'
}

Button.propsTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
