import { useState } from "react";

type AccordionType = {
  title: string;
  content: string | JSX.Element | JSX.Element[];
  header: string;
};

const Accordion = ({ title, content, header }: AccordionType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md">
      <button
        type="button"
        className="flex justify-between w-full px-4 py-6 font-medium text-left text-lg bg-gray-200 hover:bg-gray-300 border-b-2 border-gray-500 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-200">
            <h3 className="text-2xl text-center pb-3">{header}</h3>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
