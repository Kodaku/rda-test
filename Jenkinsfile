def img
pipeline {
    environment {
        registry = "axelmastroianni/rda-test"
        registryCredential = "docker-hub-login"
        dockerImage = ''
    }
    agent any

    stages {
        stage("Build image") {
            script {
                img = registry + ":{env.BUILD_ID}"
                println("${img}")
                dockerImage = docker.build("${img}")
            }
        }

        stage("Testing - running in Jenkins node") {
            steps {
                powershell "docker run -d --name ${JOB_NAME} ${img}"
            }
        }

        stage("Push to DockerHub") {
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", registryCredential) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}