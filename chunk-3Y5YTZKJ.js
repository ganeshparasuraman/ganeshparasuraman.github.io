import{a as d}from"./chunk-BJHWULE7.js";import"./chunk-SJUNRGN2.js";import"./chunk-J26JVBQC.js";import{$a as o,Gb as e,Lb as l,jb as s,sb as n,tb as t,ub as r}from"./chunk-6RPAY77S.js";var u=()=>["Peerislands","12 min read","June 2026"],m=class a{toc=[{id:"prompt",label:"Prompt Engineering"},{id:"simple",label:"Simple GenAI App"},{id:"agentic",label:"Agentic App"},{id:"tools",label:"Why Agents Need Tools"},{id:"mcp",label:"MCP Server"},{id:"interaction",label:"Agents + MCP"},{id:"workflow",label:"Agentic Workflow"},{id:"reasoning",label:"CoT, ReAct & ToT"},{id:"end-to-end",label:"End-to-End Flow"},{id:"types",label:"Chatbot vs Agent vs Workflow"},{id:"why",label:"Why This Matters"},{id:"final",label:"Final Thought"}];static \u0275fac=function(i){return new(i||a)};static \u0275cmp=o({type:a,selectors:[["app-genai-flow"]],decls:447,vars:3,consts:[["eyebrow","GenAI \xB7 Agents \xB7 MCP","heading","Understanding the GenAI Flow: From Prompt Engineering to Agentic Workflows and MCP","subtitle","From a simple prompt to a full agentic workflow \u2014 explained end to end with one running use case: generating a tailored resume and cover letter.",3,"meta","toc"],[1,"callout"],[1,"lead"],["id","prompt"],[1,"section-tag"],["id","simple"],[1,"ascii-diagram"],["id","agentic"],["id","tools"],["id","mcp"],["id","interaction"],["id","workflow"],["id","reasoning"],["id","end-to-end"],["id","types"],["id","why"],["id","final"],[1,"conclusion"],[1,"source-note"]],template:function(i,p){i&1&&(n(0,"app-article-layout",0)(1,"div",1)(2,"strong"),e(3,"Running use case throughout this blog:"),t(),e(4," Imagine you are a job seeker. You have a job description for a "),n(5,"em"),e(6,"Senior Data Engineer"),t(),e(7," role and your existing work history. You want AI to generate a tailored "),n(8,"strong"),e(9,"resume"),t(),e(10," and a compelling "),n(11,"strong"),e(12,"cover letter"),t(),e(13," automatically. We use this real-world scenario to illustrate every concept \u2014 from a simple prompt to a full agentic workflow. "),t(),n(14,"p",2),e(15," Generative AI applications are evolving very fast. In the beginning, most people used GenAI by typing a prompt into ChatGPT and reading the response. Today, we are building AI applications that can reason, call tools, interact with APIs, search enterprise data, and complete multi-step workflows. "),t(),n(16,"p"),e(17,"This blog explains the basic GenAI flow in a simple way:"),t(),n(18,"blockquote"),e(19," Prompt Engineering \u2192 Agentic App \u2192 MCP Server \u2192 Agent + Tool Interaction \u2192 Agentic Workflow App "),t(),n(20,"p"),e(21," We will also understand important reasoning patterns like "),n(22,"strong"),e(23,"CoT"),t(),e(24,", "),n(25,"strong"),e(26,"ReAct"),t(),e(27,", and "),n(28,"strong"),e(29,"ToT"),t(),e(30,", with small Python examples. "),t(),n(31,"section",3)(32,"div",4),e(33,"Step 1"),t(),n(34,"h2"),e(35,"1. Prompt Engineering"),t(),n(36,"p"),e(37,"Prompt engineering is the starting point of most GenAI applications."),t(),n(38,"p"),e(39,"A prompt is the instruction we give to the LLM. A better prompt usually gives a better answer."),t(),n(40,"p"),e(41,"A weak prompt:"),t(),n(42,"pre")(43,"code"),e(44,"Write me a resume."),t()(),n(45,"p"),e(46,"A better prompt:"),t(),n(47,"pre")(48,"code"),e(49,`You are a professional resume writer.
Given the job description below and the candidate's work history,
write a one-page resume in reverse chronological order.
Highlight skills that directly match the job requirements.
Use strong action verbs. Avoid fluff. Format as plain text.

Job Description:
{job_description}

Candidate Work History:
{work_history}`),t()(),n(50,"p"),e(51,"A good prompt usually contains:"),t(),n(52,"pre")(53,"code"),e(54,`Role       \u2192 Who should the AI act as?
Task       \u2192 What should the AI do?
Context    \u2192 What information should it use?
Format     \u2192 How should the answer be structured?
Constraint \u2192 What should it avoid or limit?`),t()(),n(55,"h3"),e(56,"Resume + Cover Letter Example"),t(),n(57,"pre")(58,"code"),e(59,`You are a professional career coach and resume writer.
Your task is to write a tailored resume AND a cover letter for the candidate below.

Job Description:
Senior Data Engineer at TechCorp
- 5+ years Apache Spark experience
- Strong Python and SQL skills
- Experience with Delta Lake or Iceberg
- Cloud experience: AWS or Azure

Candidate Work History:
- 6 years as a Data Engineer at DataCo
- Built Spark pipelines processing 10TB/day
- Proficient in Python, SQL, PySpark
- AWS Certified Solutions Architect

Output:
1. Resume (reverse chronological, one page, plain text)
2. Cover Letter (3 paragraphs: hook, fit, call to action)`),t()(),n(60,"p"),e(61,"In simple terms, prompt engineering is about converting a vague question into a clear instruction."),t()(),n(62,"section",5)(63,"div",4),e(64,"Step 2"),t(),n(65,"h2"),e(66,"2. Simple GenAI Application Flow"),t(),n(67,"p"),e(68,"A basic GenAI app looks like this:"),t(),n(69,"pre",6),e(70,`User Input
   \u2193
Prompt Template
   \u2193
LLM
   \u2193
Response
   \u2193
User`),t(),n(71,"h3"),e(72,"Resume Use Case \u2014 Basic App"),t(),n(73,"pre")(74,"code"),e(75,`def build_resume_prompt(job_description, work_history):
    return f"""
    You are a professional resume writer.
    Write a tailored, one-page resume based on the job description and work history below.

    Job Description:
    {job_description}

    Work History:
    {work_history}

    Format:
    - Name and contact at top
    - Summary (2 sentences)
    - Skills section matching the job
    - Experience in reverse chronological order
    - Education
    """

def call_llm(prompt):
    # In real applications, this calls OpenAI, Anthropic, Gemini, etc.
    return "LLM-generated resume content for the given input."

job_description = "Senior Data Engineer \u2013 Spark, Python, Delta Lake, AWS"
work_history = "6 years at DataCo, built Spark pipelines, Python, PySpark, AWS Certified"

prompt = build_resume_prompt(job_description, work_history)
resume = call_llm(prompt)

print(resume)`),t()(),n(76,"p"),e(77,"This is useful, but limited."),t(),n(78,"p"),e(79," The LLM only responds based on the prompt. It does not automatically know your LinkedIn profile, your saved job descriptions, your existing resume file, or the company's tone-of-voice preferences. That is where agentic applications come in. "),t()(),n(80,"section",7)(81,"div",4),e(82,"Step 3"),t(),n(83,"h2"),e(84,"3. What Is an Agentic App?"),t(),n(85,"p"),e(86," An agentic app is a GenAI application where the LLM does not just answer. It can also decide what action to take. "),t(),n(87,"p"),e(88,"For the resume use case, instead of only generating text:"),t(),n(89,"pre")(90,"code"),e(91,`An agentic resume builder can:
1. Fetch the job description from a URL.
2. Read the candidate's existing resume from a file.
3. Fetch the company's LinkedIn page to learn their tone.
4. Generate a tailored resume and cover letter.
5. Save both as formatted Word documents.
6. Email the documents to the candidate.`),t()(),n(92,"p"),e(93,"The flow looks like this:"),t(),n(94,"pre",6),e(95,`User Goal
   \u2193
Agent
   \u2193
Reasoning
   \u2193
Tool Selection
   \u2193
Tool Execution
   \u2193
Observation
   \u2193
Final Answer or Next Action`),t(),n(96,"p"),e(97,"An agent usually has access to tools such as:"),t(),n(98,"pre")(99,"code"),e(100,`File read/write tool
Web scrape tool
Email tool
Document formatter tool
Vector search tool (search past resumes)
MCP server tool`),t()(),n(101,"h3"),e(102,"Resume Agent \u2014 Simple Python Example"),t(),n(103,"pre")(104,"code"),e(105,`def fetch_job_description(url):
    return "Senior Data Engineer \u2013 Spark, Python, Delta Lake, AWS (fetched from URL)"

def read_candidate_profile(file_path):
    return "6 years at DataCo, Spark pipelines, Python, AWS Certified (read from file)"

def save_document(content, file_name):
    return f"Saved {file_name} successfully."

tools = {
    "fetch_job_description": fetch_job_description,
    "read_candidate_profile": read_candidate_profile,
    "save_document": save_document
}

def resume_agent(user_request):
    job_desc = tools["fetch_job_description"]("https://techcorp.com/jobs/senior-de")
    profile   = tools["read_candidate_profile"]("/data/candidate_profile.txt")

    resume_content = f"Tailored resume for: {job_desc} | Based on: {profile}"
    cover_content  = f"Cover letter for: {job_desc}"

    tools["save_document"](resume_content, "resume.docx")
    tools["save_document"](cover_content,  "cover_letter.docx")

    return "Resume and cover letter generated and saved."

print(resume_agent("Create resume and cover letter for the TechCorp job"))`),t()()(),n(106,"section",8)(107,"div",4),e(108,"Why Tools"),t(),n(109,"h2"),e(110,"4. Why Do Agents Need Tools?"),t(),n(111,"p"),e(112,"LLMs are powerful, but they have limitations."),t(),n(113,"p"),e(114,"For the resume use case, they may not know:"),t(),n(115,"pre")(116,"code"),e(117,`The candidate's most recent job details (stored in a private file)
The company's culture (on their website)
The current version of the candidate's resume (stored locally)
The correct Word document format for a professional resume
Whether a similar resume was already generated before`),t()(),n(118,"p"),e(119,"So we connect the LLM to tools:"),t(),n(120,"pre")(121,"code"),e(122,`LLM + File Tool       \u2192 Can read existing resumes and save new ones
LLM + Web Scrape Tool \u2192 Can fetch live job descriptions
LLM + Vector DB Tool  \u2192 Can find past resumes for reference
LLM + Email Tool      \u2192 Can send the final documents
LLM + MCP Server      \u2192 Can access all of the above in a standard way`),t()()(),n(123,"section",9)(124,"div",4),e(125,"Step 4"),t(),n(126,"h2"),e(127,"5. What Is an MCP Server?"),t(),n(128,"p"),e(129,"MCP stands for "),n(130,"strong"),e(131,"Model Context Protocol"),t(),e(132,"."),t(),n(133,"p"),e(134," In simple terms, MCP is a standard way for AI applications and agents to connect with tools, systems, and data sources. "),t(),n(135,"p"),e(136," Without MCP, every integration is custom-built. With MCP, tools are exposed in a standard, reusable way. "),t(),n(137,"h3"),e(138,"Resume Use Case \u2014 MCP Flow"),t(),n(139,"pre",6),e(140,`User asks:
"Generate a resume for the TechCorp Senior Data Engineer role."

Agent decides:
"I need the job description and the candidate's profile."

Agent calls MCP Server:
get_job_description(url="https://techcorp.com/jobs/senior-de")
get_candidate_profile(candidate_id="john_doe")

MCP Server fetches:
Job description from web + candidate profile from internal DB

Agent generates:
Resume and cover letter

Agent calls MCP Server:
save_document(content=resume, format="docx", name="resume_techcorp.docx")
send_email(to="john@example.com", attachments=["resume.docx", "cover_letter.docx"])`),t(),n(141,"h3"),e(142,"Python-style MCP Example"),t(),n(143,"pre")(144,"code"),e(145,`class ResumeMCPServer:
    def get_job_description(self, url):
        return {
            "title": "Senior Data Engineer",
            "company": "TechCorp",
            "skills": ["Apache Spark", "Python", "Delta Lake", "AWS"],
            "experience_years": 5
        }

    def get_candidate_profile(self, candidate_id):
        return {
            "name": "John Doe",
            "experience_years": 6,
            "skills": ["PySpark", "Python", "SQL", "AWS"],
            "certifications": ["AWS Certified Solutions Architect"]
        }

    def save_document(self, content, file_name):
        return {"saved": True, "path": f"/output/{file_name}"}

    def send_email(self, to, subject, attachments):
        return {"sent": True, "to": to}`),t()()(),n(146,"section",10)(147,"div",4),e(148,"Step 5"),t(),n(149,"h2"),e(150,"6. How Agents and MCP Interact"),t(),n(151,"p"),e(152,"Agent = Planner + Reasoner + Decision Maker"),r(153,"br"),e(154," MCP Server = Tool Provider + System Connector"),t(),n(155,"h3"),e(156,"Full Resume Interaction"),t(),n(157,"pre",6),e(158,`User:
"Create a resume and cover letter for the TechCorp Data Engineer job."

Agent:
I need the job description and candidate profile.

MCP Client:
Calls get_job_description() and get_candidate_profile()

MCP Server:
Returns job details and candidate data

Agent:
Generates tailored resume and cover letter content

MCP Client:
Calls save_document() for both files

Agent Summary:
"Your resume and cover letter for TechCorp are ready and saved."`),t(),n(159,"pre")(160,"code"),e(161,`class ResumeAgent:
    def __init__(self, mcp_server):
        self.mcp = mcp_server

    def handle_request(self, user_request):
        job  = self.mcp.get_job_description("https://techcorp.com/jobs/senior-de")
        prof = self.mcp.get_candidate_profile("john_doe")

        # Match skills
        matched = [s for s in prof["skills"] if s in job["skills"] or "Spark" in s]

        resume_content = f"""
        Name: {prof['name']}
        Target Role: {job['title']} at {job['company']}
        Matched Skills: {', '.join(matched)}
        Experience: {prof['experience_years']} years
        Certifications: {', '.join(prof['certifications'])}
        """

        cover_content = f"""
        Dear Hiring Manager,
        I am excited to apply for the {job['title']} role at {job['company']}.
        With {prof['experience_years']} years of hands-on experience in {', '.join(matched)},
        I am confident I can deliver immediate value to your team.
        I look forward to discussing this opportunity further.
        """

        self.mcp.save_document(resume_content, "resume_techcorp.docx")
        self.mcp.save_document(cover_content,  "cover_letter_techcorp.docx")

        return "Resume and cover letter created and saved successfully."

mcp    = ResumeMCPServer()
agent  = ResumeAgent(mcp)
print(agent.handle_request("Create resume for TechCorp"))`),t()()(),n(162,"section",11)(163,"div",4),e(164,"Step 6"),t(),n(165,"h2"),e(166,"7. Agentic Workflow App"),t(),n(167,"p"),e(168,"An agentic workflow app is more structured than a simple agent."),t(),n(169,"p"),e(170," Instead of the agent deciding every step on the fly, the workflow defines a clear, repeatable process \u2014 ideal for production use. "),t(),n(171,"h3"),e(172,"Resume Workflow"),t(),n(173,"pre",6),e(174,`User Request:
"Create a resume and cover letter for TechCorp Senior Data Engineer."

Workflow:

Step 1  \u2192 Fetch job description (from URL or uploaded file)
Step 2  \u2192 Load candidate profile (from DB or uploaded resume)
Step 3  \u2192 Skill gap analysis (match candidate skills to job requirements)
Step 4  \u2192 Generate tailored resume
Step 5  \u2192 Generate tailored cover letter
Step 6  \u2192 Format both as Word (.docx) documents
Step 7  \u2192 Quality check (length, tone, keyword match score)
Step 8  \u2192 Save to output folder
Step 9  \u2192 Notify candidate via email`),t(),n(175,"h3"),e(176,"Python Workflow Example"),t(),n(177,"pre")(178,"code"),e(179,`def fetch_job_description(url):
    return {"title": "Senior Data Engineer", "company": "TechCorp",
            "skills": ["Spark", "Python", "Delta Lake", "AWS"]}

def load_candidate_profile(candidate_id):
    return {"name": "John Doe", "experience_years": 6,
            "skills": ["PySpark", "Python", "SQL", "AWS"],
            "certs": ["AWS Certified Solutions Architect"]}

def skill_gap_analysis(job, profile):
    matched = [s for s in profile["skills"] if s in job["skills"] or "Spark" in s]
    missing = [s for s in job["skills"] if s not in profile["skills"] and "Spark" not in s]
    return {"matched": matched, "missing": missing}

def generate_resume(job, profile, skill_analysis):
    return f"[Resume] {profile['name']} | {job['title']} at {job['company']} | Skills: {skill_analysis['matched']}"

def generate_cover_letter(job, profile):
    return f"[Cover Letter] Applying to {job['title']} at {job['company']} - {profile['name']}"

def quality_check(resume, cover_letter):
    # Simulate keyword match check
    return {"score": 88, "passed": True, "notes": "Good keyword coverage"}

def save_documents(resume, cover_letter):
    return {"resume": "resume_techcorp.docx", "cover": "cover_techcorp.docx", "saved": True}

def notify_candidate(email, files):
    return f"Email sent to {email} with {files}"

def run_resume_workflow(job_url, candidate_id, candidate_email):
    job     = fetch_job_description(job_url)
    profile = load_candidate_profile(candidate_id)
    skills  = skill_gap_analysis(job, profile)

    if len(skills["matched"]) == 0:
        return "No skill match found. Resume not generated."

    resume       = generate_resume(job, profile, skills)
    cover_letter = generate_cover_letter(job, profile)
    quality      = quality_check(resume, cover_letter)

    if not quality["passed"]:
        return f"Quality check failed: {quality['notes']}"

    files  = save_documents(resume, cover_letter)
    notify = notify_candidate(candidate_email, files)

    return {
        "status":   "Workflow completed successfully",
        "resume":   files["resume"],
        "cover":    files["cover"],
        "quality":  quality,
        "skills":   skills,
        "email":    notify
    }

result = run_resume_workflow(
    "https://techcorp.com/jobs/senior-de",
    "john_doe",
    "john@example.com"
)
print(result)`),t()(),n(180,"h3"),e(181,"Framework options for production agentic workflows"),t(),n(182,"table")(183,"thead")(184,"tr")(185,"th"),e(186,"Framework"),t(),n(187,"th"),e(188,"Best For"),t()()(),n(189,"tbody")(190,"tr")(191,"td")(192,"strong"),e(193,"LangGraph"),t()(),n(194,"td"),e(195,"Graph-based stateful agent flows with branching"),t()(),n(196,"tr")(197,"td")(198,"strong"),e(199,"CrewAI"),t()(),n(200,"td"),e(201,"Multi-agent collaboration (e.g., Resume Writer + Reviewer agents)"),t()(),n(202,"tr")(203,"td")(204,"strong"),e(205,"Semantic Kernel"),t()(),n(206,"td"),e(207,"Enterprise .NET/Python orchestration"),t()(),n(208,"tr")(209,"td")(210,"strong"),e(211,"Temporal"),t()(),n(212,"td"),e(213,"Durable, fault-tolerant long-running workflows"),t()(),n(214,"tr")(215,"td")(216,"strong"),e(217,"Airflow"),t()(),n(218,"td"),e(219,"DAG-based pipeline orchestration"),t()(),n(220,"tr")(221,"td")(222,"strong"),e(223,"Dagster"),t()(),n(224,"td"),e(225,"Data-aware orchestration with observability"),t()(),n(226,"tr")(227,"td")(228,"strong"),e(229,"AutoGen"),t()(),n(230,"td"),e(231,"Multi-agent conversation and task delegation"),t()(),n(232,"tr")(233,"td")(234,"strong"),e(235,"LlamaIndex Workflows"),t()(),n(236,"td"),e(237,"Event-driven RAG + agentic pipelines"),t()(),n(238,"tr")(239,"td")(240,"strong"),e(241,"Prefect"),t()(),n(242,"td"),e(243,"Lightweight Python-native orchestration"),t()(),n(244,"tr")(245,"td")(246,"strong"),e(247,"Haystack"),t()(),n(248,"td"),e(249,"Pipeline-first RAG + agentic flows"),t()()()(),n(250,"p"),e(251," For the resume use case, "),n(252,"strong"),e(253,"CrewAI"),t(),e(254," is particularly interesting: you could define a "),n(255,"code"),e(256,"ResumeWriterAgent"),t(),e(257,", a "),n(258,"code"),e(259,"CoverLetterAgent"),t(),e(260,", and a "),n(261,"code"),e(262,"QualityReviewerAgent"),t(),e(263," \u2014 each with its own role, tools, and goal \u2014 working together to produce the final output. "),t()(),n(264,"section",12)(265,"div",4),e(266,"Reasoning Patterns"),t(),n(267,"h2"),e(268,"8. CoT: Chain of Thought"),t(),n(269,"p"),e(270," CoT means "),n(271,"strong"),e(272,"Chain of Thought"),t(),e(273," \u2014 solving a problem step by step, making the reasoning visible and verifiable. "),t(),n(274,"h3"),e(275,"Resume Use Case \u2014 CoT"),t(),n(276,"pre",6),e(277,`Question:
The job requires 5+ years of Spark experience.
The candidate has 6 years total, with 4 years focused on Spark.
Is the candidate a strong match for the experience requirement?

Step-by-step:
Required Spark experience = 5+ years
Candidate's total experience = 6 years
Candidate's Spark-specific experience = 4 years

4 years < 5 years required \u2192 Not a full match on Spark alone.
However, 6 total years shows strong engineering maturity.
Candidate also has AWS cert which is listed as a bonus requirement.

Conclusion:
Partial match. Highlight total experience and AWS cert in resume.
Acknowledge Spark gap briefly; emphasize adjacent Spark-related work.`),t(),n(278,"h3"),e(279,"Python-style CoT for skill matching"),t(),n(280,"pre")(281,"code"),e(282,`def cot_skill_match(job_requirements, candidate_skills):
    steps = []
    matched = []
    gaps    = []

    steps.append(f"Required skills: {job_requirements}")
    steps.append(f"Candidate skills: {candidate_skills}")

    for skill in job_requirements:
        if skill in candidate_skills:
            matched.append(skill)
            steps.append(f"  \u2713 {skill} \u2014 match found")
        else:
            gaps.append(skill)
            steps.append(f"  \u2717 {skill} \u2014 gap identified")

    match_pct = round(len(matched) / len(job_requirements) * 100)
    steps.append(f"Match score: {match_pct}%")

    conclusion = "Strong match" if match_pct >= 75 else "Partial match \u2014 tailor resume carefully"
    steps.append(f"Conclusion: {conclusion}")

    return "\\n".join(steps)

print(cot_skill_match(
    ["Spark", "Python", "Delta Lake", "AWS"],
    ["PySpark", "Python", "SQL", "AWS"]
))`),t()(),n(283,"h2"),e(284,"9. ReAct: Reason + Act"),t(),n(285,"p"),e(286," ReAct means "),n(287,"strong"),e(288,"Reasoning + Acting"),t(),e(289,". The agent loops through: Thought \u2192 Action \u2192 Observation \u2192 Thought \u2192 \u2026 "),t(),n(290,"h3"),e(291,"Resume Use Case \u2014 ReAct Loop"),t(),n(292,"pre",6),e(293,`User:
"Create a resume for TechCorp's Senior Data Engineer role."

Thought:
I need the job description. Let me fetch it.

Action:
fetch_job_description("https://techcorp.com/jobs/senior-de")

Observation:
Requirements: Spark 5+ yrs, Python, Delta Lake, AWS

Thought:
Now I need the candidate profile.

Action:
load_candidate_profile("john_doe")

Observation:
6 years experience, PySpark, Python, SQL, AWS Certified

Thought:
Good match. Delta Lake is missing \u2014 I should mention Iceberg as adjacent experience.
Now generate the resume.

Action:
generate_resume(job, profile, skill_analysis)

Observation:
Resume draft created. Length: 480 words (fits one page).

Thought:
Now generate the cover letter.

Action:
generate_cover_letter(job, profile)

Observation:
Cover letter created. 3 paragraphs. Tone is professional.

Final Answer:
Resume and cover letter are ready. Delta Lake gap noted and mitigated with Iceberg experience.`),t(),n(294,"pre")(295,"code"),e(296,`def react_resume_agent(job_url, candidate_id):
    steps = []

    steps.append("Thought: I need to fetch the job description first.")
    job = {"title": "Senior Data Engineer", "skills": ["Spark", "Python", "Delta Lake", "AWS"]}
    steps.append(f"Action: fetch_job_description('{job_url}')")
    steps.append(f"Observation: {job}")

    steps.append("Thought: Now I need the candidate profile.")
    profile = {"name": "John Doe", "skills": ["PySpark", "Python", "SQL", "AWS"], "experience_years": 6}
    steps.append(f"Action: load_candidate_profile('{candidate_id}')")
    steps.append(f"Observation: {profile}")

    gaps = [s for s in job["skills"] if s not in profile["skills"] and "Spark" not in s]
    if gaps:
        steps.append(f"Thought: Skill gaps found: {gaps}. I will address these in the resume narrative.")

    steps.append("Thought: Generating resume.")
    resume = f"[Resume for {profile['name']} targeting {job['title']}]"
    steps.append(f"Action: generate_resume(...)")
    steps.append(f"Observation: {resume}")

    steps.append("Thought: Generating cover letter.")
    cover = f"[Cover Letter for {job['title']}]"
    steps.append(f"Action: generate_cover_letter(...)")
    steps.append(f"Observation: {cover}")

    final = f"Resume and cover letter ready. Addressed skill gaps: {gaps if gaps else 'None'}"
    return "\\n".join(steps) + f"\\nFinal Answer: {final}"

print(react_resume_agent("https://techcorp.com/jobs/senior-de", "john_doe"))`),t()(),n(297,"h2"),e(298,"10. ToT: Tree of Thought"),t(),n(299,"p"),e(300," ToT means "),n(301,"strong"),e(302,"Tree of Thought"),t(),e(303,". Instead of one reasoning path, the model explores multiple paths and picks the best. "),t(),n(304,"h3"),e(305,"Resume Use Case \u2014 ToT for Cover Letter Strategy"),t(),n(306,"pre",6),e(307,`Problem:
How should John frame his cover letter given the Delta Lake skill gap?

Path 1: Be transparent about the gap, emphasize learning agility
Path 2: Lead with matching strengths, mention Iceberg as adjacent experience
Path 3: Focus entirely on business impact achieved with Spark
Path 4: Open with the AWS certification as a differentiator
Path 5: Mention Delta Lake appeared in personal projects`),t(),n(308,"pre")(309,"code"),e(310,`def evaluate_cover_letter_strategy(strategy):
    scores = {
        "transparent_gap":        6,   # Honest but may raise concern early
        "lead_with_iceberg":      9,   # Positive framing, relevant bridge
        "business_impact_focus":  8,   # Strong but doesn't address gap
        "aws_differentiator":     7,   # Relevant but off the main concern
        "personal_projects":      5    # Weak without production experience
    }
    return scores.get(strategy, 0)

def tot_cover_letter_strategy():
    strategies = [
        "transparent_gap",
        "lead_with_iceberg",
        "business_impact_focus",
        "aws_differentiator",
        "personal_projects"
    ]

    evaluated = [(s, evaluate_cover_letter_strategy(s)) for s in strategies]
    best = max(evaluated, key=lambda x: x[1])

    return {
        "all_strategies": evaluated,
        "recommended": best,
        "rationale": f"'{best[0]}' scores highest ({best[1]}/10). Framing Iceberg as an adjacent skill bridges the Delta Lake gap positively."
    }

result = tot_cover_letter_strategy()
print(result)`),t()(),n(311,"h2"),e(312,"11. How CoT, ReAct, and ToT Differ"),t(),n(313,"table")(314,"thead")(315,"tr")(316,"th"),e(317,"Pattern"),t(),n(318,"th"),e(319,"Meaning"),t(),n(320,"th"),e(321,"Resume Use Case"),t()()(),n(322,"tbody")(323,"tr")(324,"td")(325,"strong"),e(326,"CoT"),t()(),n(327,"td"),e(328,"Think step by step"),t(),n(329,"td"),e(330,"Skill gap analysis, match scoring"),t()(),n(331,"tr")(332,"td")(333,"strong"),e(334,"ReAct"),t()(),n(335,"td"),e(336,"Think, use a tool, observe, continue"),t(),n(337,"td"),e(338,"Fetching job description \u2192 generating resume \u2192 saving files"),t()(),n(339,"tr")(340,"td")(341,"strong"),e(342,"ToT"),t()(),n(343,"td"),e(344,"Explore multiple paths, pick the best"),t(),n(345,"td"),e(346,"Deciding the best cover letter framing strategy"),t()()()()(),n(347,"section",13)(348,"div",4),e(349,"Putting It Together"),t(),n(350,"h2"),e(351,"12. End-to-End GenAI Flow \u2014 Resume Use Case"),t(),n(352,"p"),e(353,"A full resume + cover letter generation system:"),t(),n(354,"pre",6),e(355,`User Request:
"Create a resume and cover letter for TechCorp Senior Data Engineer."
   \u2193
Prompt Engineering
(Structured template with role, task, context, format, constraint)
   \u2193
Agent
   \u2193
Reasoning (ReAct loop)
   \u251C\u2500\u2500 Thought: Fetch job description
   \u251C\u2500\u2500 Thought: Load candidate profile
   \u251C\u2500\u2500 Thought: Run CoT skill gap analysis
   \u2514\u2500\u2500 Thought: Use ToT to choose cover letter framing
   \u2193
MCP Client
   \u2193
MCP Server
   \u251C\u2500\u2500 get_job_description()
   \u251C\u2500\u2500 get_candidate_profile()
   \u251C\u2500\u2500 save_document(resume.docx)
   \u251C\u2500\u2500 save_document(cover_letter.docx)
   \u2514\u2500\u2500 send_email()
   \u2193
Agentic Workflow
   \u251C\u2500\u2500 Step 1: Fetch job
   \u251C\u2500\u2500 Step 2: Load profile
   \u251C\u2500\u2500 Step 3: Skill analysis
   \u251C\u2500\u2500 Step 4: Generate resume
   \u251C\u2500\u2500 Step 5: Generate cover letter
   \u251C\u2500\u2500 Step 6: Format as .docx
   \u251C\u2500\u2500 Step 7: Quality check
   \u251C\u2500\u2500 Step 8: Save
   \u2514\u2500\u2500 Step 9: Email to candidate
   \u2193
Final Output:
resume_techcorp.docx + cover_letter_techcorp.docx \u2192 Emailed to candidate`),t()(),n(356,"section",14)(357,"div",4),e(358,"Clearing It Up"),t(),n(359,"h2"),e(360,"13. Difference Between Chatbot, Agent, and Workflow"),t(),n(361,"table")(362,"thead")(363,"tr")(364,"th"),e(365,"Type"),t(),n(366,"th"),e(367,"What It Does"),t(),n(368,"th"),e(369,"Resume Example"),t()()(),n(370,"tbody")(371,"tr")(372,"td")(373,"strong"),e(374,"Chatbot"),t()(),n(375,"td"),e(376,"Answers questions"),t(),n(377,"td"),e(378,'"What should I put in a resume summary?"'),t()(),n(379,"tr")(380,"td")(381,"strong"),e(382,"Agent"),t()(),n(383,"td"),e(384,"Decides and uses tools"),t(),n(385,"td"),e(386,'"Fetch the job, load my profile, and write a resume"'),t()(),n(387,"tr")(388,"td")(389,"strong"),e(390,"Workflow App"),t()(),n(391,"td"),e(392,"Executes a controlled process"),t(),n(393,"td"),e(394,"Fetch \u2192 Analyze \u2192 Generate \u2192 Format \u2192 Quality Check \u2192 Save \u2192 Email"),t()()()(),n(395,"p"),e(396,"A chatbot is conversational."),r(397,"br"),e(398," An agent is action-oriented."),r(399,"br"),e(400," An agentic workflow is process-oriented."),t()(),n(401,"section",15)(402,"div",4),e(403,"The Point"),t(),n(404,"h2"),e(405,"14. Why This Matters"),t(),n(406,"p"),e(407,"A useful GenAI system in the real world should:"),t(),n(408,"pre")(409,"code"),e(410,`Understand user intent          \u2192 Parse "write me a resume for this job"
Read enterprise/personal data   \u2192 Candidate profile, past resumes
Call tools safely               \u2192 Fetch, generate, save, email
Use reasoning patterns          \u2192 CoT for analysis, ReAct for tool use, ToT for decisions
Follow workflows                \u2192 Reliable, repeatable, quality-checked
Explain results                 \u2192 "Here is your resume. Delta Lake gap was addressed via Iceberg."`),t()(),n(411,"p"),e(412," The resume and cover letter use case is simple to understand but requires the full stack: prompt engineering, tool use, MCP integration, reasoning patterns, and workflow orchestration \u2014 which is exactly what modern GenAI apps demand. "),t()(),n(413,"section",16)(414,"div",4),e(415,"Final Thought"),t(),n(416,"h2"),e(417,"15. Final Thought"),t(),n(418,"p")(419,"strong"),e(420,"Prompt Engineering"),t(),e(421," helps the AI understand exactly what to write and how."),t(),n(422,"p")(423,"strong"),e(424,"Agents"),t(),e(425," help the AI fetch job descriptions, load profiles, and generate documents without being told every step. "),t(),n(426,"p")(427,"strong"),e(428,"MCP"),t(),e(429," helps the AI connect to file systems, databases, and email services in a clean, standard way. "),t(),n(430,"p")(431,"strong"),e(432,"Agentic Workflows"),t(),e(433," make the resume generation process reliable, quality-checked, and production-ready. "),t(),n(434,"p"),e(435,"In simple words:"),t(),n(436,"pre")(437,"code"),e(438,`Without prompt engineering \u2192 vague, generic resume.
Without an agent           \u2192 no access to the job description or your profile.
Without MCP                \u2192 no way to save or send the documents.
Without a workflow         \u2192 no quality check, no retry, no reliability.`),t()()(),n(439,"div",17)(440,"p"),e(441," The future of GenAI is not just about asking better questions. It is about building AI systems that can "),n(442,"strong"),e(443,"reason, connect, act, and deliver"),t(),e(444," \u2014 whether the task is generating a resume or running an enterprise data pipeline. "),t()(),n(445,"p",18),e(446,"Peerislands \xB7 GenAI Series \xB7 June 2026"),t()()),i&2&&s("meta",l(2,u))("toc",p.toc)},dependencies:[d],styles:['.section-tag[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;margin-bottom:.6rem;font-family:Roboto Mono,monospace;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--mat-sys-primary)}.section-tag[_ngcontent-%COMP%]:before{content:"";width:20px;height:2px;background:var(--mat-sys-primary)}.conclusion[_ngcontent-%COMP%]{margin:2.5rem 0 0;padding:2.5rem 1.5rem;text-align:center;background:var(--mat-sys-inverse-surface);color:var(--mat-sys-inverse-on-surface);border-radius:14px;border-top:3px solid var(--mat-sys-primary)}.conclusion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto;max-width:560px;font-size:1.25rem;font-style:italic;line-height:1.5;color:var(--mat-sys-inverse-on-surface)}']})};export{m as GenaiFlowComponent};
