import SkillCard from "./SkillCard";

const Skills = () => {
    
    return (
        <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-shapes"></i> Skills
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom"><span>Skills</span></h1>
                    </div>

                    <div className="skills text-center d-flex align-items-center flex-wrap">
                        <SkillCard skillName="Android SDK/NDK"/>
                        <SkillCard skillName="iOS"/>
                        <SkillCard skillName="KMM"/>
                        <SkillCard skillName="Flutter"/>
                        <SkillCard skillName="Java / Kotlin"/>
                        <SkillCard skillName="Swift"/>
                        <SkillCard skillName="Spring Boot"/>
                        <SkillCard skillName="AWS"/>
                        <SkillCard skillName="Jetpack Compose"/>
                        <SkillCard skillName="Dagger Hilt"/>
                        <SkillCard skillName="Retrofit"/>
                        <SkillCard skillName="Junit"/>
                        <SkillCard skillName="Design Patterns"/>
                        <SkillCard skillName="UX/UI / Figma"/>
                        <SkillCard skillName="Animations"/>
                        <SkillCard skillName="Performance Tuning"/>
                        <SkillCard skillName="Application Security"/>
                        <SkillCard skillName="Jenkins / Github actions"/>
                        <SkillCard skillName="Git"/>
                        <SkillCard skillName="Firebase"/>
                        <SkillCard skillName="Jira"/>
                        <SkillCard skillName="Confluence"/>
                        <SkillCard skillName="Agile / Scrum"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;