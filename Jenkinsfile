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
      checkout scm
    }

    stage('Build') {
      docker.build("stiforr/awesome-ac")
    }
  }
}