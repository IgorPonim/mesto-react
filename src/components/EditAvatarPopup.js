import PopupWithForm from "./PopupWithForm"
import { useState } from "react"
import { useEffect } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import { useContext } from "react"

const EditAvatarPopup = ({ isOpen, onClose, sendInfoAvatar }) => {

    const currentUser = useContext(CurrentUserContext)

    const [avatar, setAvatar] = useState('')

    function onChange(ev) {
        setAvatar(ev.target.value)
    }


    useEffect(() => {
        setAvatar(currentUser.avatar);
    }, [currentUser]);


    function handleSubmit(e) {
        e.preventDefault();
        sendInfoAvatar(
            avatar
        );
        // onClose()
    }


    return (
        <PopupWithForm onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} title='Обновить аватар' name='avatar-info'>
            <input onChange={onChange} id='input-ava-link' name='link' type='url' required placeholder='Ссылка на картинку'
                className='popup__input popup__input_type_link' />
            <span id='input-ava-link-error' className='popup__error popup-link-error'></span>


        </PopupWithForm>
    )
}

export default EditAvatarPopup