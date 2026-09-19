import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const projects = [
    {
        title: "Dermin",
        description: "AI Scanning Skin Diseases",
        status: "Prototype",
        href: "https://vibrant-illuminate-985343.framer.app/",
    },
    {
        title: "Personal Portfolio",
        description: "Another Personal Portfolio Website",
        status: "Finished",
        href: "https://suningun.vercel.app/",
    },
];

const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Figma",
    "Database Design (ERD)",
];

function SectionHeading({ eyebrow, title }) {
    return (
        <div className="mb-6 border-b border-border pb-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary-dark">
            {eyebrow}
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-text">
            {title}
        </h2>
        </div>
    );
}

function ProjectCard({ title, description, status, href }) {
    return (
        <Card className="transition-shadow hover:shadow-md">
        <CardHeader className="flex-row items-start justify-between gap-4">
            <CardTitle>{title}</CardTitle>
            <Badge>{status}</Badge>
        </CardHeader>
        <CardContent>
            <p className="mb-6 text-sm leading-6 text-secondary-text">{description}</p>
            <Button href={href} variant="secondary">
            View project <span aria-hidden="true">-&gt;</span>
            </Button>
        </CardContent>
        </Card>
    );
}

function ProfileSection({ eyebrow, title, children }) {
    return (
        <section>
        <SectionHeading eyebrow={eyebrow} title={title} />
        {children}
        </section>
    );
}

function App() {
    return (
        <main className="min-h-screen bg-background px-4 py-8 text-text sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
            <nav
            className="mb-16 flex items-center justify-between"
            aria-label="Primary navigation"
            >
            <a
                className="text-sm font-bold tracking-widest text-text transition-colors hover:text-primary"
                href="#top"
            >
                Un Suning / DEV
            </a>
            <a
                className="text-sm font-bold text-secondary-text transition-colors hover:text-primary"
                href="mailto:suningun55555@gamil.com"
            >
                
            </a>
            </nav>
            <section id="top" className="grid gap-12 border-b border-border pb-16 md:grid-cols-2 md:items-center">
                <div>
                    <Badge variant="accent">Open for Work</Badge>
                    <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-none tracking-tight text-text sm:text-7xl">
                        Un Suning<span className="text-primary">.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl leading-8 text-secondary-text sm:text-2xl">
                        I design and build clear, useful interfaces for people who care
                        about the details.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button href="mailto:hello@example.com">
                        Keep in Touch
                        </Button>
                        <Button href="#work" variant="secondary">
                        See my projects
                        </Button>
                    </div>
                </div>
                <div className="hidden justify-center md:flex md:justify-end">
                    <img
                        className="h-48 w-48 transition-transform hover:scale-105 md:h-64 md:w-64"
                        src={`${import.meta.env.BASE_URL}favicon.svg`}
                        alt="Un Suning logo"
                    />
                </div>
            </section>
            <div className="grid gap-16 py-16 md:grid-cols-3 md:gap-12">
            <section
                id="work"
                className="md:col-span-2"
                aria-labelledby="work-heading"
            >
                <SectionHeading
                eyebrow="Selected work"
                title="What I have built"
                />
                <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
                </div>
            </section>
            <aside className="space-y-12">
                <ProfileSection
                eyebrow="A little about me"
                title="Positive Mind"
                >
                <p className="text-base leading-7 text-secondary-text">
                    I am an aspiring frontend developer who enjoys the space between
                    visual thinking and practical code.
                </p>
                </ProfileSection>
                <ProfileSection eyebrow="Working toolkit" title="Things I use">
                <ul className="flex flex-wrap gap-2" aria-label="Skills">
                    {skills.map((skill) => (
                    <li
                        className="rounded-lg bg-surface px-3 py-2 text-sm font-bold text-text shadow-sm ring-1 ring-border transition-colors hover:text-primary"
                        key={skill}
                    >
                        {skill}
                    </li>
                    ))}
                </ul>
                </ProfileSection>
            </aside>
            </div>
            <footer className="flex flex-col gap-3 border-t border-border py-6 text-sm text-secondary-text sm:flex-row sm:items-center sm:justify-between">
            <p>@UnSuning All Right Reserved.</p>
            <a
                className="font-bold text-text transition-colors hover:text-primary"
                href="https://github.com"
            >
                See My Repo <span aria-hidden="true">-&gt;</span>
            </a>
            </footer>
        </div>
        </main>
    );
}

export default App;
