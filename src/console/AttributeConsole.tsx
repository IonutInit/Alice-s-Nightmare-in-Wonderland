import AttributeDisplay from "../components/AttributeDisplay";

function AttributeConsole() {
  return (
    <div className="flex gap-10 justify-between pb-3 px-[5%]">
      <AttributeDisplay showIcons showStats showTooltip />
    </div>
  );
}

export default AttributeConsole;
