import { SKILLS_MAP, SKILL_TOOLS_MAP } from 'constants/about.constants';
import Card from 'components/shared/Card';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-24 py-6">
      <h1 className="text-3xl">About me</h1>
      <p className="mt-6 text-xl text-gray-400">
        "Strive not to be a success, but rather to be of value!"
      </p>
      <p className="mt-4 max-w-[40rem] text-lg text-gray-500">
        Senior Software Developer at WRKSPOT, building on a strong foundation of
        skills and insights gained during my impactful journey at Meesho. I’m
        driven by a passion for solving meaningful challenges in web development
        and software engineering.
      </p>
      <h1 className="mt-10 text-3xl">Skills</h1>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-10">
        {SKILLS_MAP.map((skill) => (
          <Card className="flex h-40 w-36 flex-col gap-4 rounded-lg">
            <div className="h-14 w-14">
              <img
                src={skill.path}
                alt={skill.label}
                height="100%"
                width="100%"
              />
            </div>
            <p className="text-center font-semibold">{skill.label}</p>
          </Card>
        ))}
      </div>
      <h1 className="mt-10 text-3xl">Tools</h1>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
        {SKILL_TOOLS_MAP.map((skill) => (
          <Card className="flex h-40 w-36 flex-col gap-4 rounded-lg">
            <div className="flex h-14 w-14 items-end">
              <img
                src={skill.path}
                alt={skill.label}
                height="100%"
                width="100%"
              />
            </div>
            <p className="text-center font-semibold">{skill.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
