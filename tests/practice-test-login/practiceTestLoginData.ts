const practiceTestLoginData = {
    url: 'https://practicetestautomation.com/practice-test-login/',
    pageTitle: 'Test Login | Practice Test Automation',
    valid: {
        username: 'student',
        password: 'Password123',
    },
    invalid: {
        username: 'incorrectUser',
        password: 'incorrectPassword',
    },
    successConfirmation: 'Congratulations student. You successfully logged in!',
    invalidUsernameMessage: 'Your username is invalid!',
    invalidPasswordMessage: 'Your password is invalid!',
} as const

export default practiceTestLoginData