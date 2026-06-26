import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

interface Job {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

interface PriorRole {
  title: string;
  company: string;
  dates: string;
}

interface Education {
  degree: string;
  school: string;
  year: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface TechItem {
  name: string;
  /** Full Devicon class (incl. "colored"); omitted → text-only badge. */
  devicon?: string;
}

interface TechSkillGroup {
  group: string;
  items: TechItem[];
}

@Component({
  selector: 'app-resume',
  imports: [MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  readonly resumeUrl = 'ganesh-parasuraman-resume.pdf';

  readonly summary: string[] = [
    'Engineering and technology leader with 19+ years of experience leading cloud modernization, AI-enabled transformation, and large-scale distributed systems across airline, healthcare, logistics, IoT, and mobility domains.',
    'Extensive experience modernizing legacy platforms into cloud-native microservices architectures and building scalable real-time operational platforms.',
    'Deep expertise in streaming systems, IoT-style platforms, and mission-critical operational environments.',
    'Proven track record delivering enterprise SaaS, streaming analytics, AI-enabled engineering platforms, and data modernization initiatives across globally distributed teams.',
    'Hands-on engineering executive with strong expertise in architecture transformation, operational reliability, troubleshooting, and platform modernization.',
    'Experienced collaborating with executive leadership, product organizations, and cross-functional engineering teams to align technology strategy with business outcomes, operational excellence, and innovation roadmaps.',
  ];

  readonly experience: Job[] = [
    {
      title: 'Director, Software Engineering',
      company: 'Peerislands, Dallas, US',
      dates: 'Oct. 2019 – Present',
      bullets: [
        'Led the development of AI-powered Copilot coding agents to modernize airline traffic control and crew maintenance platforms from legacy on-premise systems to cloud-native architectures, reducing delivery timelines from 8 months to a few weeks through AI-driven analysis, automated testing, and deployment acceleration.',
        'Directed modernization initiatives for enterprise operational systems involving microservices, streaming platforms, cloud-native architectures, and AI-assisted engineering workflows.',
        'Designed and implemented a data mesh platform processing 1.5M+ files for logistics and operational analytics while building AI-enabled analytics solutions using Databricks, Unity Catalog, and Genie AI for business self-service reporting.',
        'Led modernization of healthcare revenue cycle management platforms using configuration-driven data ingestion, analytics, and reporting pipelines.',
        'Architected high-throughput streaming systems supporting 100K+ connected devices using Kafka Streams and Kotlin, reducing end-to-end processing latency by 40%.',
        'Built AI-enabled analytics and orchestration platforms leveraging Apache Flink, MongoDB, Polars, and LLM-driven transformation frameworks for real-time decisioning and operational intelligence.',
        'Established scalable cloud-native engineering standards covering CI/CD, observability, platform reliability, deployment automation, and distributed system governance.',
      ],
    },
    {
      title: 'Senior Architect',
      company: 'Mindtree, India',
      dates: 'Sept. 2018 – Sept. 2019',
      bullets: [
        'Designed a low-code machine learning orchestration framework that accelerated data science experimentation and streamlined model delivery workflows.',
        'Implemented real-time IoT analytics and asset tracking platforms with integrated operational dashboards for logistics and industrial operations.',
        'Delivered scalable analytics architectures supporting telemetry ingestion, streaming analytics, and operational visibility.',
      ],
    },
    {
      title: 'Technical Architect',
      company: 'Cognizant, India',
      dates: 'Jun. 2016 – Oct. 2018',
      bullets: [
        'Delivered cloud optimization and zero-downtime migration initiatives resulting in sustained infrastructure cost reductions of USD 25K per month.',
        'Built mobility and logistics platforms for heavy equipment rental organizations, reducing pickup times by 80% through integrated scheduling, driver mobility, and fleet tracking solutions.',
        'Engineered predictive maintenance and real-time supply chain visibility systems leveraging GCP IoT Core and BigQuery.',
        'Developed digital operational workflow automation platforms integrating mobility, analytics, and scheduling ecosystems.',
      ],
    },
    {
      title: 'Technical Lead',
      company: 'Lister Technologies, India',
      dates: 'Nov. 2014 – Jun. 2016',
      bullets: [
        'Legacy Systems & API Architecture: Re-engineered 250+ legacy J2EE services into resilient RESTful microservices, instituting enterprise API standards and significantly improving system robustness.',
        'Cloud-Native Platform Architecture: Constructed a scalable, multi-tenant cloud-native platform for hospice care operations using MVVM architectural patterns, containerised deployments, and automated CI/CD pipelines on AWS.',
      ],
    },
    {
      title: 'Project Architect',
      company: 'IBS Software, India & Australia',
      dates: 'Apr. 2011 – Oct. 2014',
      bullets: [
        'Contributed to the technology roadmap for airline and passenger services platforms.',
        'Designed interoperability layers for airline redemption and accrual services integrating multiple airline reservation systems.',
        'Participated in RFP discussions and solution architecture for high-speed rail loyalty, hospitality loyalty, and retail loyalty platforms.',
        "Implemented group loyalty solutions, large-scale member data migration programs, and performance optimization for one of the world's largest loyalty member bases.",
      ],
    },
  ];

  readonly priorRoles: PriorRole[] = [
    { title: 'Software Developer', company: 'Tiptap, USA', dates: '2010 – 2011' },
    {
      title: 'Senior Software Applications Developer',
      company: 'Texas A&M University, Texas, USA',
      dates: '2010 – 2010',
    },
    { title: 'REACH Contact', company: 'UIC, Chicago, USA', dates: '2008 – 2010' },
    {
      title: 'Assistant Systems Engineer',
      company: 'Tata Consultancy Services, India',
      dates: '2005 – 2008',
    },
  ];

  readonly education: Education[] = [
    {
      degree: 'Master of Science (MS) – Management Information Systems',
      school: 'University of Illinois at Chicago, USA',
      year: '2010',
    },
    {
      degree: 'Bachelor of Engineering (BE) – Electronics & Communication Engineering',
      school: 'Bharathidasan University, India',
      year: '2004',
    },
  ];

  readonly certifications: Certification[] = [
    {
      name: 'Developer Professional & Developer Associate (C100DEV)',
      issuer: 'MongoDB',
      year: '2021',
    },
    {
      name: 'Certified Kubernetes Application Developer (CKAD)',
      issuer: 'The Linux Foundation',
      year: '2022',
    },
    { name: 'Associate Developer for Apache Spark 3.0', issuer: 'Databricks', year: '2022' },
    { name: 'Professional Cloud Architect', issuer: 'Google', year: '2021' },
  ];

  readonly skills: string[] = [
    'Enterprise Data & Analytics Strategy',
    'Data Engineering',
    'Data Mesh Architecture',
    'AI Integration',
    'GenAI & LLM Product Integration',
    'Multi-Cloud Transformation',
    'Advanced Analytics',
    'Power BI Enablement',
    'Low-Code / No-Code Data Platforms',
    'Streaming & Real-Time Analytics',
    'Digital Transformation',
    'Data Modernisation',
    'Enterprise Architecture',
    'Microservices',
    'Mobility',
    'IoT & Connected Systems',
    'DevOps',
    'Observability & Reliability Engineering',
    'Performance Engineering',
    'Infrastructure Automation',
    'Cloud Cost Optimization',
    'Technology Governance',
    'Security & Compliance',
    'Agile Program Delivery',
    'Product Management',
    'Executive Stakeholder Management',
    'Vendor Management',
    'Global Delivery',
    'Cross-Functional Collaboration',
    'Team Leadership',
    'Communication Skills',
    'Problem Solving',
    'Data-Driven Decision Making',
  ];

  readonly techSkills: TechSkillGroup[] = [
    {
      group: 'Architecture & Platforms',
      items: [
        { name: 'Digital & Data Architecture' },
        { name: 'Data Mesh' },
        { name: 'Microservices' },
        { name: 'Big Data' },
        { name: 'IoT' },
        { name: 'Cloud-Native Systems' },
      ],
    },
    {
      group: 'Cloud & Data Stack',
      items: [
        { name: 'AWS', devicon: 'devicon-amazonwebservices-plain-wordmark colored' },
        { name: 'Azure', devicon: 'devicon-azure-plain colored' },
        { name: 'GCP', devicon: 'devicon-googlecloud-plain colored' },
        { name: 'Kubernetes', devicon: 'devicon-kubernetes-plain colored' },
        { name: 'Databricks' },
        { name: 'Confluent Cloud' },
        { name: 'MongoDB Atlas', devicon: 'devicon-mongodb-plain colored' },
      ],
    },
    {
      group: 'Programming Languages',
      items: [
        { name: 'Java', devicon: 'devicon-java-plain colored' },
        { name: 'Scala', devicon: 'devicon-scala-plain colored' },
        { name: 'Kotlin', devicon: 'devicon-kotlin-plain colored' },
        { name: 'Go', devicon: 'devicon-go-original-wordmark colored' },
        { name: 'Python', devicon: 'devicon-python-plain colored' },
        { name: 'JavaScript', devicon: 'devicon-javascript-plain colored' },
      ],
    },
    {
      group: 'Frameworks & Tools',
      items: [
        { name: 'Apache Spark', devicon: 'devicon-apachespark-original colored' },
        { name: 'Apache Flink' },
        { name: 'Kafka', devicon: 'devicon-apachekafka-original colored' },
        { name: 'Spring EE', devicon: 'devicon-spring-plain colored' },
        { name: 'Airflow', devicon: 'devicon-apacheairflow-plain colored' },
        { name: 'Temporal' },
        { name: 'Polars' },
        { name: 'Flutter', devicon: 'devicon-flutter-plain colored' },
      ],
    },
    {
      group: 'Web & APIs',
      items: [
        { name: 'REST' },
        { name: 'GraphQL', devicon: 'devicon-graphql-plain colored' },
        { name: 'gRPC' },
        { name: 'SOAP' },
        { name: 'JAX-RS' },
        { name: 'JAX-WS' },
      ],
    },
    {
      group: 'Databases',
      items: [
        { name: 'MySQL', devicon: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', devicon: 'devicon-postgresql-plain colored' },
        { name: 'MS SQL Server', devicon: 'devicon-microsoftsqlserver-plain colored' },
        { name: 'Oracle', devicon: 'devicon-oracle-original colored' },
        { name: 'MongoDB', devicon: 'devicon-mongodb-plain colored' },
      ],
    },
    {
      group: 'DevOps & Observability',
      items: [
        { name: 'Docker', devicon: 'devicon-docker-plain colored' },
        { name: 'Helm', devicon: 'devicon-helm-original colored' },
        { name: 'Jenkins', devicon: 'devicon-jenkins-plain colored' },
        { name: 'Git', devicon: 'devicon-git-plain colored' },
        { name: 'Prometheus', devicon: 'devicon-prometheus-original colored' },
        { name: 'Grafana', devicon: 'devicon-grafana-plain colored' },
      ],
    },
    {
      group: 'AI & GenAI',
      items: [
        { name: 'OpenAI APIs' },
        { name: 'LangChain' },
        { name: 'LlamaIndex' },
        { name: 'Copilot' },
        { name: 'Claude Code' },
      ],
    },
    {
      group: 'Agile & Delivery Tools',
      items: [
        { name: 'Jira', devicon: 'devicon-jira-plain colored' },
        { name: 'Azure DevOps', devicon: 'devicon-azuredevops-plain colored' },
      ],
    },
  ];
}
