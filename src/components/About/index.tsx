import { SKILLS_MAP, SKILL_TOOLS_MAP } from 'constants/about.constants';
import Card from 'components/shared/Card';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-10 py-6">
      <h1 className="text-3xl">About me</h1>
      <p className="text-lg text-gray-400">
        "Strive not to be a success, but rather to be of value!"
      </p>
      <h1 className="text-3xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
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
      <h1 className="text-3xl">Tools</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
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
