import '../assets/styles/boxes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const IconBox = (props) => {
  return (
    <div className={props.className + ' icon-box'}>
        <div className="icon">
            {
              props.component === 'fontawesome' && props.icon === 'whatsapp' && <FontAwesomeIcon icon={faWhatsapp} />
            }

            {
              props.component === '' && props.icon && <i className={props.icon}></i>
            }
        </div>
        <div className="data">
            <span>{props.textTop}</span>
            <span className='text-bottom'>{props.textBottom}</span>
        </div>
    </div>
  )
}

export default IconBox