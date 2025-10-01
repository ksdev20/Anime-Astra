import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Icon } from "../../../icons/icons";
import { addReply, toggleLike } from "../../../DbFunctions/comments";
import { useEffect } from "react";
import { validate } from "./validation";
import type { CommentItemProps } from "../../../types/Comments/comments";
dayjs.extend(relativeTime);

export default function CommentItem({
  obj,
  mainIsReply = false,
  mainId = "",
  extra,
  hook
}: CommentItemProps) {
  const { ip, nameG, emailG } = extra; //details of user
  const { _id, name, comment, createdAt, replies = [] } = obj; //details of the specific comment/reply
  const relativeDate = dayjs(createdAt).fromNow();
  const likeCount = obj.likes ? Object.keys(obj.likes).length : 0;

  const { res, setRes } = hook;

  const setResShort = (field: string, value: any) => {
    setRes((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    setResShort("likes", likeCount);
  }, []);

  const handleTLData = (data: any) => {
    if (data.success) {
      const added = data.method == "add";
      setRes((prev: any) => ({
        ...prev,
        liked: added,
        likes: added ? res.likes + 1 : res.likes - 1,
      }));
      const message = added
        ? "Successfully added the like ✅"
        : "Successfully removed the like ❌";
      console.log(message);
    } else {
      console.log("Failed to add/remove comment");
    }
  };

  const handleLike = () => {
    if (mainIsReply) {
      toggleLike(mainId, mainIsReply, _id).then(handleTLData);
    } else {
      toggleLike(_id).then(handleTLData);
    }
  };

  const handleReplySend = () => {
    if (!validate("comment", res.reply.val)) {
      setResShort('reply.valid', false);
      return;
    }

    const replyObj = {
      name: nameG,
      email: emailG,
      reply: res.reply,
    };

    setResShort("loading", true);
    addReply(_id, replyObj).then((data) => {
      setResShort("loading", false);
      const msg = data ? "Reply Added ✅" : "Failed to add Reply ❌";
      console.log(msg);
    });
  };

  return (
    <li>
      <section className={`comment-item ${mainIsReply ? "reply-item" : ""}`}>
        <header className="ci-header">
          <span className="ci-name">{name}</span>
          <span className="ci-date">• {relativeDate}</span>
        </header>
        <p className="ci-comment">{comment}</p>
        <section className="ci-header ci-actions">
          <button aria-label="Like" className="ci-btn" onClick={handleLike}>
            {!res.liked ? (
              <Icon name="like" size={20} />
            ) : (
              <Icon name="like-filled" size={20} />
            )}
            {res.likes}
          </button>
          {!mainIsReply && (
            <button
              aria-label="Reply"
              className="ci-btn"
              onClick={() => setResShort("showReplies", !res.showReplies)}
            >
              <Icon name="reply" size={20} />
            </button>
          )}
          <button aria-label="Report" className="ci-btn">
            <Icon name="report" size={20} />
          </button>
        </section>
      </section>
      {!mainIsReply && res.showReplies && (
        <section className="after-comment-sec">
          {replies.length !== 0 && (
            <ul className="comments-list replies-list">
              {replies.map((obj: any, idx: number) => (
                <CommentItem
                  key={idx}
                  obj={obj}
                  mainIsReply={true}
                  mainId={_id}
                  extra={extra}
                  hook={{ res, setRes }}
                />
              ))}
            </ul>
          )}
          <section className="reply-write-sec">
            <textarea className="reply-input" placeholder="Type your reply" value={res.reply.val} onChange={(e) => setResShort('reply.val', e.target.value)}/>
            <button className="send-btn" onClick={handleReplySend}>
              {res.loading ? (
                <div className="loader-1" />
              ) : (
                <Icon name="send-filled" className={"send-icon"} />
              )}
            </button>
          </section>
        </section>
      )}
    </li>
  );
}
