import { useState, useEffect } from "react";
import { addComment, getComments } from "../../../DbFunctions/comments";
import Loader from "../../Loader/Loader";
import '../../../styles/components/individuals/comment-section.css';
import InputForm from "./inputForm";
//libs for relative time
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CommentItem from "./CommentItem";
dayjs.extend(relativeTime);

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidValue(value){
  return value !== "" && value.length > 3;
}

const containsHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

export default function CommentSection({ slug }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [valid, setValid] = useState({
    name: true,
    email: true,
    comment: true,
  });
  const [ip, setIp] = useState("");

  const handleComChange = (e) => {
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    setComment(el.value);
  }

  const htmlCheckItems = [
    {
      f: 'name',
      item: name
    }, {
      f: 'email',
      item: email
    }, {
      f: 'comment',
      item: comment
    }
  ];

  const addCommentConfig = [
    {
      valid: valid.name,
      label: 'Name',
      value: name,
      onChange: (e) => {
        setName(e.target.value);
      },
    },
    {
      valid: valid.email,
      label: 'Email',
      value: email,
      onChange: (e) => {
        setEmail(e.target.value);
      }
    },
    {
      valid: valid.comment,
      label: 'Comment',
      value: comment,
      onChange: handleComChange
    },
  ];

  useEffect(() => {
    main();
  }, []);

  async function main() {
    if (!slug) return;
    getComments(slug).then((data) => {
      if (data) setComments(data?.comments);
      setIp(data.ip);
    });
  }

  async function submitComment() {
    if (!isValidValue(name) && !isValidValue(comment) && !isValidEmail(email)){
      return;
    }
    // if (!valid.name || !valid.email || !valid.comment) return;
    setSubmitting(true);
    const commentObject = {
      postSlug: slug,
      name: name,
      email: email,
      comment: comment
    };

    addComment(commentObject).then(i => {
      setSubmitting(false);
      window.location.reload();
      console.log(i ? "Successfully added Comment ✅" : "Failed to add comment ❌");
    });
  }

  useEffect(() => {
    setValid({ name: !containsHTML(name), comment: !containsHTML(comment), email: !containsHTML(email) });
  }, [name, comment, email]); //name, comment and email validation

  return (
    <section id="comments" className="bp-comment-section">
      <header className="hs-heading cs-head">Comments</header>
      <ul className="comments-list">
        {comments.map((obj, idx) => (
          <CommentItem key={idx} obj={obj} ip={ip} client:load />
        ))}
      </ul >
      <section className="add-comment-section">
        <header className="acs-head">Add a Comment</header>
        <div className="name-email-sec">
          {addCommentConfig.map((obj, idx) => {
            if (idx == 2) return null;//not wanna put comment form in a flex-row
            return (
              <InputForm key={idx} obj={obj} />
            )
          })}
        </div>
        <InputForm obj={addCommentConfig[2]} />
        <section className="comment-actions">
          <button className="ca-btn" onClick={() => submitComment()}>{submitting ?
            <Loader />
            : 'Submit'}</button>
        </section>
      </section>
    </section >
  );
}