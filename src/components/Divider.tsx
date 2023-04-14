type DividerType = {
  height?: string;
  color?: string;
};

function Divider({ height, color }: DividerType) {
  return <div className={`h-${height} bg-${color}`} />;
}

Divider.defaultProps = {
  height: "h-2",
  color: "slate-500",
};

export default Divider;
