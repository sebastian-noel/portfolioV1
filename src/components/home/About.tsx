export default function About() {
  return (
    <section className="bg-background text-foreground py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">About me</h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-(--color-text)/85">
          <p>
            Hey, I&apos;m Sebastian 👋! I&apos;m majoring in Computer Science with a minor in Intelligent Robotic Systems at the <a href="https://www.ucf.edu/" target="_blank" rel="noopener noreferrer" className="relative text-accent font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:w-full">University of Central Florida</a> and looking for Summer 2026 internship opportunities to build upon my professional experience!
          </p>
          
          <p>
            I&apos;m currently a Software Engineer Intern at <a href="https://www.bny.com/" target="_blank" rel="noopener noreferrer" className="relative text-accent font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:w-full">BNY</a>, Computer Vision Researcher at <a href="https://www.crcv.ucf.edu/" target="_blank" rel="noopener noreferrer" className="relative text-accent font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:w-full">CRCV</a>, Secretary & Software Engineer at <a href="https://knightconnect.campuslabs.com/engage/organization/graphicsprogrammingknights" target="_blank" rel="noopener noreferrer" className="relative text-accent font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:w-full">Graphics Programming Knights</a>, and an Outreach Board Member for <a href="https://club.knighthacks.org/" target="_blank" rel="noopener noreferrer" className="relative text-accent font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:w-full">Knight Hacks</a>!
          </p>
          
          <p>
            I hope to improve my software engineering proficiency, explore potential opportunities, and connect with like-minded professionals to further my growth!
          </p>
        </div>
      </div>
    </section>
  );
}
