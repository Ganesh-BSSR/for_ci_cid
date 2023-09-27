const chai = require('chai')
const chaiHttp = require('chai-http')
const mocha = require('mocha')
const app = require('./index')
chai.use(chaiHttp)
const expect = chai.expect

describe('User API', () => {
  describe('POST /login', () => {
    it('Should handle user login', (done) => {
      chai
        .request(app)
        .post('/login')
        .send({ username: 'Ganesh', password: 'Ganesh' })
        .end((err, res) => {
          if (err) {
            expect(res).to.have.status(400)
          } else {
            expect(res).to.have.status(200)
            expect(res.body)
              .to.have.property('message')
              .equal('Logged in Successfully!')
          }
          done()
        })
    })

    it('Should handle user failed login', (done) => {
      chai
        .request(app)
        .post('/login')
        .send({ username: 'Ganesh', password: 'Ganesh' })
        .end((err, res) => {
          if (err) {
            expect(res).to.have.status(400)
          } else {
            expect(res).to.have.status(200)
            expect(res.body)
              .to.have.property('message')
              .equal('Logged in Successfully!')
          }
          done()
        })
    })
  })
})
