"use client";
import { useState } from "react";
import { Question, questions } from "./data";
import { AiOutlineSearch } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQPage() {
  const [displayQuestions, setDisplayQuestions] = useState(questions);

  const handleSearch = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = questions.filter((question) =>
      question.question.toLowerCase().includes(searchTerm)
    );
    setDisplayQuestions(filteredUsers);
  };

  return (
    <div className="page">
      <h2>Questions</h2>
      <h1>FAQ Page</h1>
      <div className="flex items-center border border-dark_gray rounded-full bg-white w-1/4">
        <AiOutlineSearch className="text-dark_gray ml-2 text-lg" />
        <input
          type="text"
          placeholder="Search For Questions..."
          className="flex-1 p-2 border-0 focus:outline-none rounded-full"
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-6 overflow-y-auto max-h-[700px] px-2">
        <AnimatePresence mode="wait">
          {displayQuestions.map((question) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <QuestionItem question={question} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface QuestionItemProps {
  question: Question;
}

const QuestionItem = ({ question }: QuestionItemProps) => {
  const [isDropdown, setDropdown] = useState(false);

  return (
    <motion.div className="p-4 bg-white rounded-2xl shadow-md">
      <div className="flex items-center justify-between">
        <h4>{question.question}</h4>
        <button className="ml-2" onClick={() => setDropdown(!isDropdown)}>
          {isDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <AnimatePresence>
        {isDropdown && (
          <motion.div
            className="mt-4 flex"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <img
              src={question.image}
              alt="Question Image"
              className="rounded w-1/2 h-1/2 object-cover mr-4"
            />
            <div className="space-y-2">
              <h2 className="text-2xl">Steps:</h2>
              {question.steps.map((step) => (
                <h3 key={step} className="mb-2">
                  {step}
                </h3>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
