
export const locales = {
    en: { title: 'EN' },
    zn: { title: 'ZH' },
  };


export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Icon({ id, open }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="6" x2="12" y2="6" stroke="#AB9834" strokeWidth="2"/>        
      {id !== open && (<line x1="6" y1="-4.37114e-08" x2="6" y2="12" stroke="#AB9834" strokeWidth="2"/>)}
    </svg>
  );
}