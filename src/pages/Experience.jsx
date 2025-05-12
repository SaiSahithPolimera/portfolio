import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BriefCase } from "../components/Icons";

const Experience = () => {
  const experiences = [
    {
      date: 'December 2022 - June 2023',
      title: 'Tecnics Integration Technologies',
      subtitle: 'Apprentice',
      description: [
        'Developed a Python-based GUI chat application using Tkinter for messaging, featuring client-server communication with multi-threading and socket programming.',
        'Created a Java application implementing CRUD operations for MySQL and SQLite databases using JDBC, following the Factory Design Pattern with dynamic class loading from a configuration file.',
      ],
      icon: <BriefCase />,
      iconStyle: { background: 'black', color: '#fff' },
    },
    {
      date: 'February 2024 - April 2024',
      title: 'Summer of Bitcoin',
      subtitle: 'Apprentice',
      description: [
        'Selected for Summer of Bitcoin apprenticeship program where I learned about the fundamentals of blockchain.',
        'Actively participated in hands-on boot-camp for four weeks to learn ins and outs of Bitcoin.',
      ],
      icon: <BriefCase />,
      iconStyle: { background: 'black', color: '#fff' },
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-black text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            style={{
              fontFamily: 'sans-serif',
              letterSpacing: '1px',
            }}
            iconStyle={exp.iconStyle}
            icon={exp.icon}
            contentStyle={{ background: 'black', color: 'white', borderRadius: "18px", border: '1px solid oklch(26.9% 0 0)' }}
            contentArrowStyle={{ borderRight: '8px solid oklch(55.6% 0 0)' }}
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <h4 className="text-md text-gray-400">{exp.subtitle}</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-stone-300">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
