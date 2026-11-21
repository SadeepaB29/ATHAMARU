import { Github, Linkedin } from 'lucide-react';

// Update placeholder roles and profile URLs with your actual team details
const TEAM_MEMBERS = [
    {
        name: 'Sadeepa Bandara',
        initials: 'SB',
        role: 'Team Leader · Solution Architect · Developer',
        linkedin: 'https://www.linkedin.com/in/sadeepa-bandara-w2181847/',
        github: 'https://github.com/SadeepaB29',
    },
    {
        name: 'Sandun Tharaka',
        initials: 'ST',
        role: 'Team Member . Product Owner · Developer',
        linkedin: 'https://www.linkedin.com/in/sandun-tharaka-b51bb6265/',
        github: 'https://github.com/w8xdp4k5g8-cell',
    },
    {
        name: 'Navidu Sahan',
        initials: 'NS',
        role: 'Team Member . QA Lead · Developer',
        linkedin: 'https://www.linkedin.com/in/navidu-sahan-416256400',
        github: 'https://github.com/snavidu66-cyber',
    },
    {
        name: 'Senesh Madushan',
        initials: 'SM',
        role: 'Team Member . Scrum Master · Developer',
        linkedin: 'https://linkedin.com/in/senesh-madhushan',
        github: 'https://github.com/SeneshMadhushan',
    },
    {
        name: 'Udith Subodha',
        initials: 'US',
        role: 'Team Member . UI/UX Designer · Developer',
        linkedin: 'https://www.linkedin.com/in/udith-subodha-04926831a',
        github: 'https://github.com/udithsubo2007-ui',
    },
]

    export default function Team() {
    return (
        <section
        id="team"
        className="border-y border-line bg-surface py-16 lg:py-20"
        >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="max-w-prose">
            <p className="text-sm font-semibold text-accent-dark">
                Group CS-77 • 5COSC021C.Y / 5COSC021W
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Meet the team building ATHAMARU
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Five Computer Science undergraduates at the Informatics Institute of
                Technology (University of Westminster) working together to make
                campus second-hand trading transparent and sustainable.
            </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {TEAM_MEMBERS.map((member) => (
                <article
                key={member.name}
                className="flex flex-col items-center rounded-xl border border-line bg-bg p-6 text-center shadow-sm"
                >
                <div
                    aria-hidden="true"
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-surface"
                >
                    {member.initials}
                </div>

                <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-muted">
                    {member.role}
                </p>

                {/* 44x44px Accessible Icon Links */}
                <div className="mt-5 flex items-center gap-2">
                    <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line-input bg-surface text-primary transition-colors hover:border-primary hover:bg-surface-alt"
                    >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                    </a>
                    <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on GitHub`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line-input bg-surface text-primary transition-colors hover:border-primary hover:bg-surface-alt"
                    >
                    <Github className="h-5 w-5" aria-hidden="true" />
                    </a>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
}