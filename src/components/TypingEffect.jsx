import React, { useEffect, useState } from "react";

const TypingEffect = ({ parts, speed = 50, delay = 2000 }) => {
  const [displayedContent, setDisplayedContent] = useState([]);
  const [flatText, setFlatText] = useState([]);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const flattened = [];

    parts.forEach((part, partIndex) => {
      if (typeof part === "string") {
        part
          .split("")
          .forEach((char) =>
            flattened.push({ char, key: partIndex, className: null })
          );
      } else if (React.isValidElement(part)) {
        const text = part.props.children;
        text.split("").forEach((char) =>
          flattened.push({
            char,
            key: partIndex,
            className: part.props.className || null,
          })
        );
      }
    });

    setFlatText(flattened);
  }, [parts]);

  useEffect(() => {
    if (flatText.length === 0) return;

    let timeout;

    if (charIndex < flatText.length) {
      timeout = setTimeout(() => {
        setDisplayedContent((prev) => [...prev, flatText[charIndex]]);
        setCharIndex(charIndex + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedContent([]);
        setCharIndex(0);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, flatText, speed, delay]);

  const renderContent = () => {
    const grouped = [];

    let currentGroup = [];
    let currentKey = null;
    let currentClass = null;

    displayedContent.forEach(({ char, key, className }) => {
      if (key !== currentKey || className !== currentClass) {
        if (currentGroup.length > 0) {
          grouped.push(
            currentClass ? (
              <span key={grouped.length} className={currentClass}>
                {currentGroup.join("")}
              </span>
            ) : (
              <span key={grouped.length}>{currentGroup.join("")}</span>
            )
          );
        }
        currentGroup = [char];
        currentKey = key;
        currentClass = className;
      } else {
        currentGroup.push(char);
      }
    });

    if (currentGroup.length > 0) {
      grouped.push(
        currentClass ? (
          <span key={grouped.length} className={currentClass}>
            {currentGroup.join("")}
          </span>
        ) : (
          <span key={grouped.length}>{currentGroup.join("")}</span>
        )
      );
    }

    return grouped;
  };

  return (
    <span className="whitespace-pre-wrap">
      {renderContent()}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;
