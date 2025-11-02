# Jenkins Test Project

A simple Node.js project to test Jenkins CI/CD pipeline.

## Project Structure

```
.
├── Jenkinsfile       # Jenkins pipeline configuration
├── package.json      # Node.js project metadata
├── index.js          # Main application file
├── test.js           # Simple test file
└── README.md         # This file
```

## Features

- Simple Node.js application with basic functions
- Automated tests
- Jenkins pipeline with multiple stages

## Jenkins Pipeline Stages

1. **Checkout**: Checks out code from the repository
2. **Build**: Verifies Node.js and npm are available
3. **Test**: Runs automated tests
4. **Run Application**: Executes the main application
5. **Deploy**: Placeholder for deployment steps

## Local Testing

Before pushing to GitHub and Jenkins, you can test locally:

```bash
# Run the application
npm start

# Run tests
npm test
```

## Setting Up Jenkins

1. **Install Jenkins** with Node.js plugin
2. **Create a new Pipeline job** in Jenkins
3. **Configure the job**:
   - Select "Pipeline script from SCM"
   - Choose "Git" as SCM
   - Enter your GitHub repository URL
   - Set Script Path to `Jenkinsfile`
4. **Save and Build**

## GitHub Setup

1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jenkins test project"
   ```

2. Create a new repository on GitHub

3. Push to GitHub:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

## Requirements

- Node.js (any recent version)
- Jenkins with Node.js plugin installed

## Notes

- The pipeline uses `sh` commands, suitable for Linux/Mac. For Windows Jenkins agents, replace `sh` with `bat` in the Jenkinsfile.
- Make sure Node.js is available in your Jenkins environment PATH.