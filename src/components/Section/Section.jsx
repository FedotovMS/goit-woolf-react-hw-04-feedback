import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h1 className={css.title}>{title}</h1>
      <div className={css.children}>{children}</div>
    </div>
  );
};
export default Section;
