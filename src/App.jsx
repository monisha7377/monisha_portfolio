import React, { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        const skillBars = document.querySelectorAll('.skill-bar-fill');
        skillBars.forEach(bar => {
            const skillLevel = bar.getAttribute('data-skill-level');
            if (bar.style) {
                bar.style.width = skillLevel;
            }
        });
    }, []);

    const sections = {
        summary: "Highly motivated and results-driven Software Engineer with a passion for Artificial Intelligence and Machine Learning. Proven ability in developing and implementing solutions using a range of technologies, with a strong foundation in data structures, algorithms, and full-stack development. Seeking to leverage technical skills and problem-solving abilities to contribute to a dynamic engineering team.",
        
        projects: [
            {
                title: "Sentiment Analysis on Movie Reviews",
                subtitle: "Hybrid LSTM+CNN Model",
                description: "Engineered a hybrid deep learning model combining LSTM for sequential text understanding and CNN for feature extraction to classify movie review sentiments. Achieved a robust sentiment classification system with a test accuracy of 87.9%.",
            },
            {
                title: "Traffic Signal Control",
                subtitle: "Deep-Q Learning Agent",
                description: "Implemented a Deep-Q Learning (DQL) agent in a simulated traffic environment, achieving a 15% reduction in average vehicle wait time. Trained the agent over 30 episodes, validating the effectiveness of reinforcement learning.",
            },
            {
                title: "Liver Disease Prediction",
                subtitle: "Machine Learning Models",
                description: "Developed a predictive model to diagnose liver disease from patient clinical data. Utilized Logistic Regression (0.76% accuracy), SVM (0.74% accuracy), and Random Forest (0.71% accuracy).",
            },
        ],

        skills: [
            { name: "Java", level: "90%" },
            { name: "Python", level: "85%" },
            { name: "JavaScript", level: "80%" },
            { name: "HTML & CSS", level: "85%" },
            { name: "Data Structures & Algorithms", level: "88%" },
            { name: "Machine Learning & AI", level: "90%" },
            { name: "Web Development", level: "85%" },
            { name: "Database Management", level: "75%" },
        ],
    };

    return (
        <div className="font-sans antialiased text-gray-800 bg-gray-100 min-h-screen flex items-center justify-center py-12">
            <style jsx="true">{`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #f0f4f8;
                    color: #334155;
                }
                .container {
                    max-width: 1024px;
                }
                .section-card {
                    background-color: #ffffff;
                    border-radius: 1.5rem;
                    padding: 2.5rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    margin-bottom: 2rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .section-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }
                .skill-bar {
                    height: 10px;
                    background-color: #e2e8f0;
                    border-radius: 9999px;
                    overflow: hidden;
                }
                .skill-bar-fill {
                    height: 100%;
                    background-color: #f97316;
                    transition: width 1s ease-in-out;
                }
            `}</style>
            
            <div className="container mx-auto p-6 sm:p-12">
                {/* Header Section */}
                <header className="section-card text-center relative overflow-hidden bg-gradient-to-br from-indigo-500 to-fuchsia-600 text-white shadow-xl">
                    <div className="relative z-10 flex flex-col items-center">
                        <img src="https://placehold.co/150x150/d1d5db/000000?text=M.D." alt="Monisha Dusanapudi" className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-4" />
                        <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-wide">Monisha Dusanapudi</h1>
                        <p className="text-xl sm:text-2xl font-light opacity-90">Software Engineer | AI & Machine Learning Enthusiast</p>
                    </div>
                </header>

                {/* Main Content */}
                <main>
                    {/* Summary Section */}
                    <section className="section-card">
                        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-orange-500 pb-2">Summary</h2>
                        <p className="text-gray-700 leading-relaxed">{sections.summary}</p>
                    </section>

                    {/* Skills Section with Progress Bars */}
                    <section className="section-card">
                        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-orange-500 pb-2">Skills</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Programming Languages</h4>
                                <ul className="space-y-4">
                                    {sections.skills.slice(0, 4).map(skill => (
                                        <li key={skill.name}>
                                            <p className="text-sm font-medium">{skill.name}</p>
                                            <div className="skill-bar">
                                                <div className="skill-bar-fill" data-skill-level={skill.level}></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Technical Skills</h4>
                                <ul className="space-y-4">
                                    {sections.skills.slice(4).map(skill => (
                                        <li key={skill.name}>
                                            <p className="text-sm font-medium">{skill.name}</p>
                                            <div className="skill-bar">
                                                <div className="skill-bar-fill" data-skill-level={skill.level}></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section className="section-card">
                        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-orange-500 pb-2">Projects</h2>
                        <div className="space-y-8">
                            {sections.projects.map(project => (
                                <div key={project.title} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h3>
                                    <p className="text-sm font-medium text-gray-500 mb-2">{project.subtitle}</p>
                                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Connect Section */}
                    <section className="section-card text-center">
                        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-orange-500 pb-2">Connect with Me</h2>
                        <p className="text-lg text-gray-700 mb-6">Feel free to reach out or explore my work!</p>
                        <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                            <a href="mailto:monisha.dusanapudi@gmail.com" className="bg-orange-500 text-white font-medium py-2 px-6 rounded-full hover:bg-orange-600 transition-colors shadow-md">Email</a>
                            <a href="https://www.linkedin.com/in/monisha-d-66b4a8323" target="_blank" className="bg-blue-700 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-800 transition-colors shadow-md">LinkedIn</a>
                            <a href="https://github.com/monisha7377" target="_blank" className="bg-gray-800 text-white font-medium py-2 px-6 rounded-full hover:bg-gray-900 transition-colors shadow-md">GitHub</a>
                            <a href="https://www.credly.com/users/monisha-dusanapudi" target="_blank" className="bg-gray-600 text-white font-medium py-2 px-6 rounded-full hover:bg-gray-700 transition-colors shadow-md">Credly</a>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default App;