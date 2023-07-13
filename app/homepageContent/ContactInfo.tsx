import styles from './contactInfo.module.css';

const contactLinks = [
  {
    name: 'Resume',
    // TODO: Self host instead
    url: 'http://katestrykermcmanus.com/content/home/KateStrykerMcManusResume.pdf',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/kate-mcmanus-9440944a/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/katemcmanus.design/',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/katestrykermcm',
  },
];

export function ContactInfo() {
  return (
    <address className="flex flex-col gap-[0.625rem] not-italic">
      <p>katestrykermcm@gmail.com</p>
      <ul className="flex">
        {contactLinks.map(({ name, url }) => (
          <li key={name} className={`${styles.contactInfoItem}`}>
            <a target="_blank" rel="noreferrer" href={url}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
}
