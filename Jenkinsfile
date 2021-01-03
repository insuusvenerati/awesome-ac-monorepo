node {
  def app

  stage("Git clone") {
    checkout scm
  }

  stage("Build Image") {
    app = docker.build("stiforr/awesome-ac")
  }
}