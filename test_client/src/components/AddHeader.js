import PropTypes from 'prop-types'


const Header = ({title}) => {
  return (
    <header>
      <h1 className='header'>{title}</h1>
      <Button />
    </header>
  )
}

Header.defaultProps = {
    title: 'Add Claim'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
