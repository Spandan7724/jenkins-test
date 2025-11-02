pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root:root'
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'node --version'
                sh 'npm --version'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        
        stage('Run Application') {
            steps {
                echo 'Running the application...'
                sh 'npm start'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deployment stage - Add your deployment steps here'
                echo 'Application is ready for deployment!'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully! ✓'
        }
        failure {
            echo 'Pipeline failed! ✗'
        }
        always {
            echo 'Cleaning up...'
        }
    }
}