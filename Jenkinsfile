pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        fileExists 'Dockerfile'
        sh 'docker built -c Dockerfile -t stiforr/awesome-ac:latest'
      }
    }

  }
}