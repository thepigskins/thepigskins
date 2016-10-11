const path = require('path');
const fs = require('fs');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

const PORT = process.env.PORT || 8080;
const HOST = `http://localhost:${PORT}`;


// test if this is necessary
require('../server.js');

describe('Server routes', () => {
  describe('GET request to /', () => {
    it('should respond with a status of 200', (done) => {
      request(HOST)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200, done);
    });

    it('should respond with the index.html file', (done) => {
      request(HOST)
        .get('/')
        .expect((response) => {
          const indexFile = fs.readFileSync(path.join(__dirname, '../', 'client', 'index.html'));
          expect(indexFile.toString()).to.equal(response.text);
        })
        .expect(200, done);
    });

    describe('GET request to /bundle.js', () => {
      it('should respond with the bundle.js file', (done) => {
        request(HOST)
          .get('/bundle.js')
          .expect((response) => {
            const bundleFile = fs.readFileSync(path.join(__dirname, '../', 'client', 'bundle.js'));
            expect(bundleFile.toString()).to.equal(response.text);
          })
          .expect(200, done);
      });
    });

    describe('GET request to an invalid route', () => {
      it('should respond with a status of 404', (done) => {
        request(HOST)
          .get('/bad')
          .expect(404, done);
      });
    });
  });
});
