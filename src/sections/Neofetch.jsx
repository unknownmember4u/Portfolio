import React from 'react';

const archLogo = `                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooooooo/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/`;

const Neofetch = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem', marginTop: '1rem' }}>
      <pre className="text-cyan" style={{ margin: 0, lineHeight: '1.2', textShadow: '0 0 5px var(--secondary-cyan)' }}>
        {archLogo}
      </pre>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span className="text-green" style={{ fontWeight: 'bold' }}>prakash</span>
          <span className="text-cyan">@</span>
          <span className="text-green" style={{ fontWeight: 'bold' }}>archlinux</span>
        </div>
        <div style={{ borderBottom: '1px dashed #555', marginBottom: '0.5rem', width: '100%' }}></div>
        
        {[
          { label: 'OS', value: 'Arch Linux / NixOS' },
          { label: 'Host', value: 'prakash-gond-portfolio' },
          { label: 'Shell', value: 'zsh 5.9' },
          { label: 'DE', value: 'unknown // self-hosted' },
          { label: 'Terminal', value: 'kitty' },
          { label: 'CPU', value: 'Brain @ 3.6GHz (overclocked)' },
          { label: 'Skills', value: 'AWS | Docker | Linux | Python | Java | Git' },
          { label: 'Uptime', value: '21 years' }
        ].map((item, idx) => (
          <div key={idx} style={{ padding: '0.1rem 0' }}>
            <span className="text-cyan" style={{ fontWeight: 'bold' }}>{item.label}:</span>{' '}
            <span style={{ color: '#ddd' }}>{item.value}</span>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '4px', marginTop: '1rem' }}>
          {['#0A0A0A', '#FF5F56', '#27C93F', '#FFBD2E', '#00FFFF', '#FF00FF', '#00FF41', '#FFFFFF'].map((color, idx) => (
            <div key={idx} style={{ backgroundColor: color, width: '16px', height: '16px' }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Neofetch;
