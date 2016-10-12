const path = require('path');
const fs = require('fs');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

const HOST = 'http://localhost:8080';

require('../server.js');

describe('Server routes', function() {
  describe('GET request to /', function() {
    it('should respond with a status of 200', function(done) {
      request(HOST)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200, done);
    });

    it('should respond with the index.html file', function(done) {
      request(HOST)
        .get('/')
        .expect((response) => {
          const indexFile = fs.readFileSync(path.join(__dirname, '../', 'client', 'index.html'));
          expect(indexFile.toString()).to.equal(response.text);
        })
        .expect(200, done);
    });
  });

  describe('GET request to /bundle.js', () => {
    it('should respond with the bundle.js file', (done) => {
      request(HOST)
        .get('/bundle.js')
        .expect((response) => {
          const bundleFile = fs.readFileSync(path.join(__dirname, '../', 'client', 'dist', 'bundle.js'));
          expect(bundleFile.toString()).to.equal(response.text);
        })
        .expect(200, done);
    });
  });

  describe('GET request to an invalid route', function() {
    it('should respond with a status of 404', function(done) {
      request(HOST)
      .get('/bad')
      .expect(404, done);
    });
  });
  

  describe('POST request to /save', function() {
    it('should respond with a status of 200', function(done) {
      request(HOST)
        .post('/save')
        .expect(200, done);
    });
  });

  describe('POST request to /invalid', function() {
    it('should respond with a status of 404', (done) => {
      request(HOST)
        .post('/invalid')
        .expect(404, done);
    });
  });

});

