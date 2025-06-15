import React from 'react';

interface BlockProps {
    children: React.ReactNode;
    className?: string;
}

export const Block: React.FC<BlockProps> = ({ children, className = '' }) => {
    return (
        <div className={`w-full mx-1 md:mx-8 ${className}`}>
            {children}
        </div>
    );
};

export const BlockHeader = ({ title }: { title: string }) => {
  return (
    <h3
      className="text-left text-3xl mb-4 uppercase font-semibold "
      style={{ letterSpacing: "0.08em" }}
    >
      <span className="mr-4 rotate" style={{ fontSize: "0.856em" }}>§</span><span>{title}</span>
    </h3>
  );
};

export const BlockBody: React.FC<BlockProps> = ({ children, className = '' }) => {
    return (
        <div className={` ${className}`}>
            {children}
        </div>
    );
};