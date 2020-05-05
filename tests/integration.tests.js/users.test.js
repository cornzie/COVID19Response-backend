describe('Auth and User Functions', function() {
    const userCtrl = require('../../components/auth/auth.ctrl');
    const faker = require('faker');

    let mockRes = {
        send: function() {
            return arguments[0];
        }
    };
    
    let mockReq = {
        session: {}
    }

    let spy = jest.spyOn(mockRes, 'send');

    test('Signup', function() {
        const logindata = {email: faker.internet.email(), password: faker.internet.password(), firstname: faker.name.firstName(), lastname: faker.name.lastName()};

        mockReq.body = logindata;
        console.log('MOCKREQ', mockReq);
        return userCtrl.signup(mockReq, mockRes)
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
