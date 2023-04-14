type DividerType = {
  height?: string;
  color?: string;
};

function Divider({ height, color }: DividerType) {
  return <div className={`h-${height} bg-${color}`} />;
}

Divider.defaultProps = {
  height: "2",
  color: "slate-300",
};

export default Divider;
