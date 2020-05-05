describe('Auth and User Functions', function() {
    const userCtrl = require('../../components/auth/auth.ctrl');
    const faker = require('faker');

    mockRes = {
        send: function() {
            return arguments[0];
        }
    };

    let spy = jest.spyOn(mockRes, 'send');

    test('Signup', function() {
        const logindata = {email: faker.internet.email(), password: faker.internet.password(), firstname: faker.name.firstName(), lastname: faker.name.lastName()};

        return userCtrl.signup({body: logindata}, mockRes)
        .then(res=> {
            expect(spy).toHaveBeenCalledWith(
                "Signup successful. Please log in"
            );
            return userCtrl.login({body: logindata}, mockRes)
            .then(res => {
                expect(spy).toHaveBeenCalledWith(
                    "Logging you in"
                );
            });
        });
    });
});
