export default function InputForm({ obj }) {
  const { valid, label, value, onChange, invalidMsg } = obj;
  const isComment = label == 'Comment';
  const isEmail = label == 'Email';
  return (
    <section className="acs-form">
      <div className={`flex gap-2 ${!valid ? "invalid" : ""}`}>
        <label htmlFor="name-input" className="acs-label">
          {label}
        </label>
        {!isEmail && (<div className="text-2xl">*</div>)}
        <span className={"text-base"}>{!valid ? invalidMsg : ""}</span>
      </div>
      {!isComment ? (
        <input
          type="text"
          className="acs-input"
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea className="acs-input comment-input" value={value} onChange={onChange} />
      )}
    </section>
  );
}
