import { CurrentUserContext } from "../contexts/CurrentUserContext"
import { useContext } from "react";




const Card = ({ card, onCardClick }) => {

    const currentUser = useContext(CurrentUserContext) //вытаскиваю данные из контекста
    // console.log(useContext(CurrentUserContext) )
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__delete ${isOwn ? 'element__delete_visible' : 'element__delete_hidden'}`
    );


    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `element__reaction ${isLiked ? 'element__reaction_like' : ''}`;
    // console.log(isLiked)


    return (
        <article className='element'>
            <img onClick={() => { onCardClick(card) }} className='element__image' alt={card.name} src={card.link} />
            <button type='submit' className={cardDeleteButtonClassName}></button>
            <div className='element__description'>
                <h2 className='element__name'>{card.name}</h2>
                <div className='element__likes-area'>
                    <button onClick={(ev) => { ev.target.classList.toggle('element__reaction_like') }} type='button' className={cardLikeButtonClassName}></button>
                    <p className='element__reaction-amount'>{card.likes.length}</p>
                </div>
            </div>
        </article>)
}

export default Card;