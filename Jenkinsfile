pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t stiforr/awesome-ac'
      }
    }
  }
}