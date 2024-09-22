pipeline {
    agent any

    environment {
        GOOGLE_APPLICATION_CREDENTIALS = credentials('gcp-credentials')
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git url: 'https://github.com/YOUR_USERNAME/YOUR_REPO.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'echo "Build step for the app"'
            }
        }



        stage('Manual Deploy') {
            input {
                message "Do you want to deploy to GCS?"
                ok "Yes, deploy!"
            }
            steps {
                script {
                    echo 'Deploying to Google Cloud Storage...'
                    sh 'gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS'
                    sh 'gsutil cp ./index.html gs://your-bucket-name/'
                }
            }
        }
    }
}