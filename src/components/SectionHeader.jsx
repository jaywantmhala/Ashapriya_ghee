import React from 'react';

const SectionHeader = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-[11px] tracking-[0.3em] uppercase text-brandDeepRed">{eyebrow}</p>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl text-brandBrown">{title}</h2>
      {subtitle && <p className="text-sm text-brandBrown/80 max-w-xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
