const handleEvent = (event, dispatch) => {
  if (event !== undefined) {
    for (let i = 0; i < event.length; i += 1) {
      const attribute = event[i].name;
      const amount = event[i].change;
      const eventIsGood = amount > 0;
      const multiplePoints = Math.abs(amount) !== 1;
      dispatch({
        type: "modify_attribute",
        payload: {
          attribute,
          amount,
        },
      });
      dispatch({
        type: "update_log",
        payload: `You have ${eventIsGood ? "won" : "lost"} ${Math.abs(
          amount
        )} ${attribute} point${multiplePoints ? "s" : ""}!`,
      });
    }
  }
};

export default handleEvent;
