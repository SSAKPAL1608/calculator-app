pipeline {
    agent any

    environment {
        GOOGLE_APPLICATION_CREDENTIALS = credentials('gcp_key_new')
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git url: 'https://github.com/SSAKPAL1608/calculator-app.git', branch: 'main'
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
                    sh 'gsutil cp -r ./ gs://shreya-new-bucket/calculator-app'
                }
            }
        }
    }
}



git add