import React from "react";
import style from "../../css/Comment.module.css";
import { useUsernameContext } from "../../hooks/useUsername";


interface IComment {
    username: string | number;
}

const Comment: React.FC<IComment> = ({ username }) => {

    const [currentUser, setCurrentUser] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const myUsername = useUsernameContext();

    

    const onEdit = () => {
        setIsEdit(!isEdit);
    }


    React.useEffect(() => {
        if (username === myUsername.username) {
            setCurrentUser(true);
        } else {
            setCurrentUser(false);
        }
    }, [myUsername.username])
    return (
        <>
            <div className={style.comment}>
                <div className={style.buttonBox}>
                    {currentUser && <button className={style.buttonDelete}>
                        <img src="/images/icon-delete.svg" alt="delete.svg" /><p>Delete</p>
                    </button>}
                    {currentUser ? (<button className={style.buttonReplyEdit} onClick={() => onEdit()}>
                        <img src="/images/icon-edit.svg" alt="edit.svg" /><p>Edit</p>
                    </button>) : (<button className={style.buttonReplyEdit}>
                        <img src="/images/icon-reply.svg" alt="reply.svg" /><p>Reply</p>
                    </button>)}
                </div>
                <div className={style.assesmentBox}>
                    <div className={style.likesBox}>
                        <button className={style.buttonPlus}/>
                        <p className={style.rating}>12</p>
                        <button className={style.buttonMinus}/>
                    </div>
                </div>
                <div className={style.informationBox}>
                    <div className={style.information}>
                        <img src="/images/avatars/image-amyrobson.webp" alt="avatar" className={style.avatar} />
                        <p className={style.name}>amyrobson</p>
                        {currentUser && <div className={style.meBlock}>you</div>}
                        <p className={style.dateComment}>1 month ago</p>
                    </div>

                    <div className={style.commentText} contentEditable={isEdit}>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</div>
                </div>
            </div>
        </>
    )
}

export default Comment;