import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4 cursor-pointer" onClick={toggleOpen}>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
        {isOpen ? (
          <FaMinus className="text-blue-500" />
        ) : (
          <FaPlus className="text-blue-500" />
        )}
      </div>
      {isOpen && (
        <div className="mt-4 text-gray-600 text-lg">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default FAQCard;