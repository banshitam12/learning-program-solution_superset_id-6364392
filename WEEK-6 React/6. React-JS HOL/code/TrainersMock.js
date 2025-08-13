import Trainer from './trainer';

const trainersData = [
    new Trainer(
        1001,
        "John Smith",
        "john.smith@example.com",
        "+1-555-0123",
        "Full Stack",
        ["JavaScript", "React", "Node.js", "MongoDB"]
    ),
    new Trainer(
        1002,
        "Sarah Johnson",
        "sarah.johnson@example.com",
        "+1-555-0124",
        "Frontend",
        ["HTML", "CSS", "JavaScript", "Vue.js", "Angular"]
    ),
    new Trainer(
        1003,
        "Mike Davis",
        "mike.davis@example.com",
        "+1-555-0125",
        "Backend",
        ["Python", "Django", "PostgreSQL", "Docker"]
    ),
    new Trainer(
        1004,
        "Emily Chen",
        "emily.chen@example.com",
        "+1-555-0126",
        "Mobile",
        ["React Native", "Flutter", "iOS", "Android"]
    ),
    new Trainer(
        1005,
        "David Wilson",
        "david.wilson@example.com",
        "+1-555-0127",
        "DevOps",
        ["AWS", "Kubernetes", "Jenkins", "Terraform"]
    )
];

export default trainersData;