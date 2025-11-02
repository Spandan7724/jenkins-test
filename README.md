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

## Setting Up GitHub Webhook for Automatic Builds

To automatically trigger Jenkins builds when you push changes to GitHub:

### Step 1: Configure Jenkins Job

1. Open your Jenkins job (Pipeline)
2. Click **"Configure"**
3. Under **"Build Triggers"** section:
   - Check **"GitHub hook trigger for GITScm polling"**
4. Click **"Save"**

### Step 2: Configure GitHub Webhook

1. Go to your GitHub repository: https://github.com/Spandan7724/jenkins-test
2. Click **"Settings"** tab
3. Click **"Webhooks"** in the left sidebar
4. Click **"Add webhook"** button
5. Configure the webhook:
   - **Payload URL**: `http://YOUR_JENKINS_URL/github-webhook/`
     - Example: `http://jenkins.example.com:8080/github-webhook/`
     - Note: Include the trailing slash!
   - **Content type**: Select `application/json`
   - **Which events**: Select "Just the push event"
   - **Active**: Check this box
6. Click **"Add webhook"**

### Step 3: Test the Webhook

1. Make a small change to any file in your repository
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test webhook"
   git push
   ```
3. Check Jenkins - it should automatically start a new build!

### Troubleshooting Webhooks

**If webhook isn't working:**

1. **Check webhook deliveries** on GitHub:
   - Go to Settings > Webhooks
   - Click on your webhook
   - Check "Recent Deliveries" tab for errors

2. **Verify Jenkins URL is accessible**:
   - GitHub must be able to reach your Jenkins server
   - If Jenkins is on localhost, use a tunnel service like ngrok

3. **For local Jenkins setup**, use ngrok:
   ```bash
   ngrok http 8080
   ```
   Then use the ngrok URL in webhook: `https://YOUR_NGROK_URL/github-webhook/`

4. **Alternative: Poll SCM** (less efficient but works for local setups):
   - In Jenkins job configuration
   - Under "Build Triggers", check "Poll SCM"
   - Schedule: `H/5 * * * *` (checks every 5 minutes)

## Notes

- The pipeline uses `sh` commands, suitable for Linux/Mac. For Windows Jenkins agents, replace `sh` with `bat` in the Jenkinsfile.
- Make sure Node.js is available in your Jenkins environment PATH.
- For production, ensure your Jenkins server has proper security and is accessible via HTTPS.
- GitHub webhooks require Jenkins to be publicly accessible. For local development, consider using ngrok or poll SCM instead.