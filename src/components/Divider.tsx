type DividerType = {
  height?: string;
  color?: string;
};

function Divider({ height, color }: DividerType) {
  return <div className={`h-${height} bg-${color} z-10`} />;
}

Divider.defaultProps = {
  height: "2",
  color: "slate-500",
};

export default Divider;
