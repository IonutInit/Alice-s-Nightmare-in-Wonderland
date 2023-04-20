function customButtonMessage(log: string[]) {
  if (log[log.length - 1]?.indexOf("Alice won") === 0) {
    return `${log[log.length - 1]} Time to move on!`;
  }
  return "Continue";
}

export default customButtonMessage;
