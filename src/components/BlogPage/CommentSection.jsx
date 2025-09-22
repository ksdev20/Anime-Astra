import { useState, useEffect } from "react";
import { addComment, getComments } from "../../DbFunctions/comments";
import Loader from "../Loader/Loader";

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default function CommentSection({ slug }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setsubmitting] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [valid, setValid] = useState({
    name: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    main();
  }, []);

  async function submitComment() {
    if (!isValidEmail(email) && name !== '' && comment !== '') {
      if (validEmail) setValidEmail(false);
      return;
    }
    setsubmitting(true);
    const commentObject = {
      postSlug: slug,
      name: name,
      email: email,
      comment: comment
    };

    addComment(commentObject).then(i => {
      setsubmitting(false);
      window.location.reload();
      console.log("Success ✅");
    });
  }
  async function main() {
    if (!slug) return;
    console.log(slug);
    const com = getComments(slug).then((data) => {
      if (data) setComments(data?.comments);
    });
    console.log(com);
  }

  const handleComChange = (e) => {
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    setComment(el.value);
  }

  return (
    <section className="bp-comment-section">
      <header className="hs-heading cs-head">Comments</header>
      <ul className="comments-list">
        {comments.map((obj, idx) => {
          const { name, email, comment, createdAt, likes, replies } = obj;
          return (<li key={idx}>
            <div>{name}</div>
            <div>{email}</div>
            <div>{comment}</div>
          </li>);
        })}
      </ul>
      <section className="add-comment-section">
        <header className="acs-head">Add a Comment</header>
        <div className="name-email-sec">
          <section className="acs-form">
            <div className="flex gap-2">
              <label htmlFor="name-input" className="acs-label">Name</label>
              <div className="text-2xl">*</div>
            </div>
            <input type="text" id="name-input" className="acs-input" value={name} onChange={(e) => setName(e.target.value)} />
          </section>
          <section className="acs-form">
            <div className={`flex gap-2 ${!validEmail ? 'invalid' : ''}`}>
              <label htmlFor="name-input" className="acs-label">Email</label>
              <div className="text-2xl">*</div>
              <span className={"text-base"}>{!validEmail ? 'Invalid email' : ''}</span>
            </div>
            <input type="text" id="email-input" className="acs-input" value={email} onChange={(e) => {
              setEmail(e.target.value);
              setValidEmail(isValidEmail(e.target.value));
            }} />
          </section>
        </div>
        <section className="acs-form">
          <label htmlFor="email-input" className="acs-label">Comment</label>
          <textarea id="email-input" className="acs-input comment-input" value={comment} onChange={handleComChange} />
        </section>
        <section className="comment-actions">
          <button className="ca-btn" onClick={() => submitComment()}>{submitting ?
            <Loader />
            : 'Submit'}</button>
        </section>
      </section>
    </section>
  );
}