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
    stage('Git clone') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        docker.build('stiforr/awesome-ac')
      }
    }
  }
}
