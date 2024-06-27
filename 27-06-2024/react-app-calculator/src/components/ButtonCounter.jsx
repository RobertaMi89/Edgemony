function ButtonCounter(props) {
  const { children, className, ...attrs } = props;
  const classes = "btn " + (className || "");

  return (
    <button {...attrs} className={classes}>
      {children}
    </button>
  );
}

export { ButtonCounter };
