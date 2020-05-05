describe('Auth Actions', function() {

    const server = require('../../app');
    const request = require('supertest');
    const faker = require('faker');
    //const loginhelper = require('../helpers/loginhelper.js');

    const userDeets = {email: faker.internet.email(), password: faker.internet.password(), firstname: faker.name.firstName(), lastname: faker.name.lastName()}
    test('Signup', function() {
        return request(server).post('/signup').send(userDeets)
        .then(res => {  
            expect(res).toEqual( expect.objectContaining({
                header: expect.objectContaining({
                    'set-cookie': expect.arrayContaining([expect.stringMatching(/SID/)])
                })
            }));
        });
    });
    test('Login', function() {
        return request(server).post('/login').send(userDeets)
        .then(res => {  
            expect(res).toEqual( expect.objectContaining({
                headers: expect.objectContaining({
                    'set-cookie': [expect.stringMatching(/SID/)]
                })
            }));
        });
    });
});
