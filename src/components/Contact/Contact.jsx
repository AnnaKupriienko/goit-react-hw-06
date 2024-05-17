import css from "./Contact.module.css"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice';
export default function Contact({ id, name, number}) {
    const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(id))
    return (
        <div className={css.container}>
                <p className={css.text}><IoMdContact className={css.icon} />{name}</p>
                <p className={css.text}><FaPhoneAlt className={css.icon} />{number}</p>
            <button className={css.btnDelete} onClick={handleDelete}>Delete</button>
            </div>
            
    );
}