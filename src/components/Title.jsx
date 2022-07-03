import '../assets/styles/title.scss'

const Title = (props) => {
    const {title,type} = props;

    return (
        <span className={'title title__' + type}>
            {title}
        </span>
    )
}

export default Title