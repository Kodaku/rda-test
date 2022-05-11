pipeline {
  agent any
  stages {
    stage('Build image') {
      steps {
        script {
          img = registry + ":${env.BUILD_ID}"
          println("${img}")
          dockerImage = docker.build("${img}")
        }

      }
    }

    stage('Testing - running in Jenkins node') {
      steps {
        powershell "docker run ${img}"
      }
    }

    stage('Push to DockerHub') {
      steps {
        script {
          docker.withRegistry("https://registry.hub.docker.com", registryCredential) {
            dockerImage.push()
          }
        }

      }
    }

  }
  environment {
    registry = 'axelmastroianni/rda-test'
    registryCredential = 'docker-hub-login'
    dockerImage = ''
  }
}