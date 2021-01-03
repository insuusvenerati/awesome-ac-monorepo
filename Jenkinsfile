pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        docker {
          image 'docker'
        }

      }
      steps {
        sh 'docker build -t stiforr/awesome-ac'
      }
    }

  }
}