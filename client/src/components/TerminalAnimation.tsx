import { useEffect, useState } from 'react';

interface TerminalLine {
  text: string;
  isComplete: boolean;
}

export default function TerminalAnimation() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: '> Initializing SOC Analyst...', isComplete: false },
    { text: '> Loading SIEM dashboards', isComplete: false },
    { text: '> Analyzing security logs...', isComplete: false },
    { text: '> Threat detected in network traffic', isComplete: false },
    { text: '> Investigating alert [HIGH PRIORITY]', isComplete: false },
    { text: '> Incident response initiated', isComplete: false },
  ]);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    const isLineComplete = currentCharIndex >= currentLine.text.length;

    if (isLineComplete) {
      // Move to next line after a delay
      const timer = setTimeout(() => {
        if (currentLineIndex < lines.length - 1) {
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
        }
      }, 500);
      return () => clearTimeout(timer);
    }

    // Type character
    const timer = setTimeout(() => {
      setCurrentCharIndex(currentCharIndex + 1);
    }, 50);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, lines]);

  return (
    <div className="font-mono text-sm md:text-base text-cyan space-y-1">
      {lines.map((line, index) => (
        <div key={index} className="h-6">
          {index < currentLineIndex && (
            <span className="text-cyan">{line.text}</span>
          )}
          {index === currentLineIndex && (
            <span className="text-cyan">
              {line.text.substring(0, currentCharIndex)}
              <span className="typing-cursor">|</span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
