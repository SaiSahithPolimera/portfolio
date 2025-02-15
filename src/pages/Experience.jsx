import { Chrono } from "react-chrono";

const Experience = () => {
    const items =
        [
            {
                title: "December 2022 - June 2023",
                cardTitle: "Tecnics Integration Technologies",
                url: "https://www.tecnics.com/",
                cardSubtitle:
                    "Apprentice",
                cardDetailedText: [
                    `•  Developed a Python-based GUI chat application using Tkinter for messaging, featuring client-server communication with multi-threading and socket programming. <br> 
                     •  Created a Java application implementing CRUD operations for MySQL and SQLite databases using JDBC, following the Factory Design Pattern with dynamic class loading from a configuration file.
                        `,
                ],
            },
            {
                title: "Feburary 2024 - April 2024",
                cardTitle: "SUMMER OF BITCOIN",
                cardSubtitle: `Apprentice`,
                cardDetailedText: [` 
                    •  Selected for summer of bitcoin apprenticeship program where I learned about the fundamentals of blockchain.<br>
                    •  Actively participated in hands-on boot-camp for four weeks to learn ins and outs of bitcoin.`,],
            }
        ]
    return (
        <section className="self-center flex items-center flex-col mt-12">
            <h2 className="text-2xl font-bold text-center">Experience</h2>
            <Chrono
                items={items}
                scrollable={true}
                hideControls
                borderLessCards={true}
                disableToolbar={true}
                enableOutline
                parseDetailsAsHTML
                mode="VERTICAL_ALTERNATING"
                theme={
                    {
                        cardMediaBgColor: 'black',
                        cardTitleColor: '#7446ef',
                        titleColor: 'black',
                        titleColorActive: 'white',
                        primary: '#7446ef',
                        secondary: 'black',
                    }
                }
            />
        </section>
    );
};

export default Experience;