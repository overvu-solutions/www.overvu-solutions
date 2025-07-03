const Ampersand = () => {
  return (
    <span className="mr-4 rotate" style={{ fontSize: "0.856em" }}>
      §
    </span>
  );
};

const BlockHeader = ({ title }: { title: string }) => {
  return (
    <h3
      className="text-left text-3xl mb-4 uppercase font-semibold "
      style={{ letterSpacing: "0.08em" }}
    >
      <Ampersand /> {title}
    </h3>
  );
};

export { BlockHeader }