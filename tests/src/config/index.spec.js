import chai from 'chai';
import config from 'config';

const expect = chai.expect;

describe('boilerplate api configuration', () => {
  it('should contain all the correct configuration options', () => {
    expect(config).to.be.an('object');
    expect(config.get('server')).to.be.an('object');
    expect(config.get('server')).to.have.a.property('host').that.is.a('string');
    expect(config.get('server')).to.have.a.property('port').that.is.a('number');
  });
});
