import { useState, useEffect } from "react";
import { addComment, getComments } from "../../../DbFunctions/comments";
import "../../../styles/components/individuals/comment-section.css";
import InputForm from "./inputForm";
//libs for relative time
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import CommentItem from "./CommentItem";
import { validate } from "./validation";
dayjs.extend(relativeTime);

export default function CommentSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hashedIp, setHIP] = useState("");

  const [res, setRes] = useState({
    name: {
      val: "",
      valid: true,
    },
    email: {
      val: "",
      valid: true,
    },
    comment: {
      val: "",
      valid: true,
    },
  });

  const setResShort = (field: string, value: string) => {
    setRes((prev) => ({
      ...prev,
      [field]: { val: value, valid: validate(field, value) },
    }));
  };

  async function main() {
    if (!slug) return;
    getComments(slug).then((data) => {
      if (data) setComments(data?.comments);
      setHIP(data.ip);
    });
  }

  useEffect(() => {
    main();
  }, []);

  const handleComChange = (e: any) => {
    if (!hasInteracted) setHasInteracted(true);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    setResShort("comment", el.value);
  };

  const addCommentConfig = [
    {
      valid: res.name.valid,
      label: "Name",
      value: res.name.val,
      onChange: (e: any) => {
        if (!hasInteracted) setHasInteracted(true);
        setResShort("name", e.target.value);
      },
      invalidMsg: res.name.val == "" ? "Name Required" : "Invalid Name",
    },
    {
      valid: res.email.valid,
      label: "Email",
      value: res.email.val,
      onChange: (e: any) => {
        if (!hasInteracted) setHasInteracted(true);
        setResShort("email", e.target.value);
      },
      invalidMsg: "Invalid Email, Empty this field either",
    },
    {
      valid: res.comment.valid,
      label: "Comment",
      value: res.comment.val,
      onChange: handleComChange,
      invalidMsg:
        res.comment.val == "" ? "Comment Required" : "Invalid Comment",
    },
  ];

  async function submitComment() {
    if (!hasInteracted) {
      setHasInteracted(true);
      return;
    }

    if (!res.name.valid || !res.comment.valid || !res.email.valid) {
      return;
    }

    const commentObject = {
      postSlug: slug,
      name: res.name.val,
      email: res.email.val,
      comment: res.comment.val,
    };

    setSubmitting(true);
    addComment(commentObject).then((i) => {
      setSubmitting(false);
      window.location.reload();
      console.log(
        i ? "Successfully added Comment ✅" : "Failed to add comment ❌"
      );
    });
  }

  const extra = {
    ip: hashedIp,
    nameG: res.name.val,
    emailG: res.email.val,
  };

  return (
    <>
      <section
        aria-label="Add a comment section"
        className="add-comment-section"
      >
        <h4 className="acs-head">Add a Comment</h4>
        <span>Tip : Fill Name* to reply to comments</span>
        <div className="name-email-sec">
          {addCommentConfig.map((obj, idx) => {
            if (idx == 2) return null;
            return <InputForm key={idx} obj={obj} />;
          })}
        </div>
        <InputForm obj={addCommentConfig[2]} />
        <section className="comment-actions">
          <button className="ca-btn" onClick={() => submitComment()}>
            {submitting ? <div className="loader-1"></div> : "Submit"}
          </button>
        </section>
      </section>
      <section
        aria-label="Comments section"
        id="comments"
        className="bp-comment-section"
      >
        <h4 className="hs-heading cs-head">Comments</h4>
        <ul className="comments-list">
          {comments.map((obj, idx) => (
            <CommentItem
              key={idx}
              obj={obj}
              extra={extra}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
