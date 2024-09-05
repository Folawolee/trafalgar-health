import './LearnMore.css'

const LearnMore = (props) => {
    return (
        <div>
            <button type='button' className='learnmore-btn'>{props.title}</button>
        </div>
    )
}

export default LearnMore;