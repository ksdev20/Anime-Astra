import type { InputFormProps } from "../../../types/Comments/comments";

export default function InputForm({ obj }: {obj: InputFormProps}) {
  const { valid, label, value, onChange, invalidMsg } = obj;
  const isComment = label == 'Comment';
  const isEmail = label == 'Email';
  return (
    <section className="acs-form">
      <header className={`flex gap-2 ${!valid ? "invalid" : ""}`}>
        <label htmlFor={label} className="acs-label">
          {label}
        </label>
        {!isEmail && (<div className="text-2xl">*</div>)}
        <span className={"text-base"}>{!valid ? invalidMsg : ""}</span>
      </header>
      {!isComment ? (
        <input
          id={label}
          type="text"
          className="acs-input"
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea id={label} className="acs-input comment-input" value={value} onChange={onChange} />
      )}
    </section>
  );
}
