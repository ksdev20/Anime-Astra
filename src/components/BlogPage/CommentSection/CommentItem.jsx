import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Icon } from '../../../icons/icons';
import { toggleLike } from '../../../DbFunctions/comments';
import {  useState } from 'react';
dayjs.extend(relativeTime);

export default function CommentItem({ obj, mainIsReply = false, ip }) {
    const [liked, setLiked] = useState(obj.likes[ip]);
    const { _id, name, comment, createdAt, replies = [] } = obj;
    const likeCount = obj.likes ? Object.keys(obj.likes).length : 0;
    const [likes, setLikes] = useState(likeCount);
    const relativeDate = dayjs(createdAt).fromNow();


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
                    <button className="ci-btn">
                        <Icon name="reply" size={20} />
                    </button>
                    <button className="ci-btn">
                        <Icon name="report" size={20} />
                    </button>
                </section>
            </section>
            {
                replies.length !== 0 && (
                    <ul className="comments-list replies-list">
                        {replies.map((obj) => {
                            return (
                                <li>
                                    <CommentItem obj={obj} mainIsReply={true} />
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        </li>
    );
}