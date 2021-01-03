pipeline {
  agent {
    kubernetes {
      label 'awesome-ac'
      idleMinutes 5
      yamlFile 'build-pod.yaml'
      defaultContainer 'docker'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t stiforr/awesome-ac .'
      }
    }
  }
}
