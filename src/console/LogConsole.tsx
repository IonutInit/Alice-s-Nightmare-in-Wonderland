import { useEffect, useRef } from "react";

import { State } from "../../types";

function LogConsole({ state }: State) {
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function scrollToBottom() {
      logRef.current!.scrollTop = logRef.current!.scrollHeight;
    }
    scrollToBottom();
  }, [state.log]);

  return (
    <div className="h-20 overflow-scroll text-slate-600" ref={logRef}>
      {state.log.map((log, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <p className="text-sm" key={index}>
            {log}
          </p>
        );
      })}
    </div>
  );
}

export default LogConsole;
