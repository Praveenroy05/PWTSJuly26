pipeline {
    agent any

    parameters {
        choice(name: 'TEST_ENV', choices: ['prod', 'qa', 'stg'], description: 'Environment used by Playwright tests')
    }

    environment {
        CI = 'true'
        ENV = "${params.TEST_ENV}"
    }

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                        sh 'npx playwright install --with-deps chromium'
                    } else {
                        bat 'npm ci'
                        bat 'npx playwright install chromium'
                    }
                }
            }
        }

        stage('Run Playwright tests') {
            steps {
                script {
                    def testExitCode = isUnix()
                        ? sh(script: 'npm run regresionTest', returnStatus: true)
                        : bat(script: 'npm run regresionTest', returnStatus: true)
                    if (testExitCode != 0) {
                        currentBuild.result = 'FAILURE'
                        echo "Playwright tests exited with status ${testExitCode}."
                    }
                }
            }
        }

        stage('Generate Allure report?') {
            steps {
                script {
                    def generateReport = input(
                        message: 'Playwright execution is complete. Generate the Allure report?',
                        ok: 'Continue',
                        parameters: [booleanParam(defaultValue: true, name: 'Generate Allure report')]
                    )

                    if (generateReport) {
                        if (isUnix()) {
                            sh 'npx allure generate allure-results --clean --output allure-report'
                        } else {
                            bat 'npx allure generate allure-results --clean --output allure-report'
                        }
                        archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: false
                    } else {
                        echo 'Allure report generation skipped.'
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-results/**,playwright-report/**,test-results/**', allowEmptyArchive: true
        }
    }
}