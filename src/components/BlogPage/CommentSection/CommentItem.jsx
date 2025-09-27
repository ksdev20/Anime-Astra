import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Icon } from '../../../icons/icons';
import { addReply, toggleLike } from '../../../DbFunctions/comments';
import { useState } from 'react';
import Loader from '../../Loader/Loader';
import { containsHTML, isValidValue } from './CommentSection';
dayjs.extend(relativeTime);

{/*  */ }

export default function CommentItem({ obj, mainIsReply = false, ip, nameG, emailG }) {
    const [liked, setLiked] = useState(obj.likes[ip]);
    const { _id, name, comment, createdAt, replies = [] } = obj;
    const likeCount = obj.likes ? Object.keys(obj.likes).length : 0;
    const [likes, setLikes] = useState(likeCount);
    const relativeDate = dayjs(createdAt).fromNow();
    const [repStrip, setRepStrip] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <li>
            <section className={`comment-item ${mainIsReply ? 'reply-item' : ''}`}>
                <header className="ci-header">
                    <span className="ci-name">{name}</span>
                    <span className="ci-date">• {relativeDate}</span>
                </header>
                <p className="ci-comment">{comment}</p>
                <section className="ci-header ci-actions">
                    <button className="ci-btn" onClick={() => {
                        toggleLike(_id).then(data => {
                            if (!data) {
                                console.warn("Got falsely data");
                            } else {
                                if (data.success) {
                                    const added = data.method == 'add';
                                    setLiked(added);
                                    setLikes(added ? likes + 1 : likes - 1)
                                    const message = added ? "Successfully added the like ✅" : "Successfully removed the like ❌"
                                    console.log(message);
                                } else {
                                    console.log("Failed to add/remove comment");
                                }
                            }
                        });
                    }}>
                        {!liked ? <Icon name="like" size={20} /> : <Icon name="like-filled" size={20} />}{likes}
                    </button>
                    <button className="ci-btn" onClick={() => setRepStrip(!repStrip)}>
                        <Icon name="reply" size={20} />
                    </button>
                    <button className="ci-btn">
                        <Icon name="report" size={20} />
                    </button>
                </section>
            </section>
            {
                !mainIsReply && replies.length !== 0 && (
                    <ul className="comments-list replies-list">
                        {replies.map((obj, idx) => {
                            return (
                                <CommentItem key={idx} obj={obj} mainIsReply={true} />
                            )
                        })}
                    </ul>
                )
            }
            {!mainIsReply && (<section className='reply-write-sec'>
                <textarea className="reply-input" placeholder='Type your reply' />
                <button className='send-btn' onClick={(e) => {
                    const replyEl = e.currentTarget.previousElementSibling;
                    const reply = replyEl.value;
                    if (containsHTML(reply) || !isValidValue(reply)) {
                        replyEl.value = "Invalid Reply !";
                        return;
                    }
                    const replyObj = {
                        name: "Kuchi",
                        email: emailG,
                        reply: reply
                    };
                    setLoading(true);
                    addReply(_id, replyObj).then(data => {
                        setLoading(false);
                        const msg = data ? "Reply Added ✅" : "Failed to add Reply ❌";
                        console.log(msg);
                    });
                }}>{loading ? <Loader /> : <Icon name='send-filled' className={"send-icon"} />}</button>
            </section>)}
        </li>
    );
}