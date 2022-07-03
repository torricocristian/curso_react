import '../assets/styles/boxes.scss';

const IconBox = (props) => {
  return (
    <div className={props.className + ' icon-box'}>
        <div className="icon">
            <i className={props.icon}></i>
        </div>
        <div className="data">
            <span>{props.textTop}</span>
            <span className='text-bottom'>{props.textBottom}</span>
        </div>
    </div>
  )
}

export default IconBox