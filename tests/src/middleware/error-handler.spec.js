import chai from 'chai';
import sinon from 'sinon';
import { errorHandler, invalidEndpoint } from '../../../src/middleware';

const { expect } = chai;

describe('Middleware', () => {
  let sandbox;
  let stub;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    // stub = sandbox.stub(oracledb, 'createPool');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('Error handler', () => {
    it('should be a function', () => {
      expect(errorHandler).to.be.an('function');
    });
    it('should be a function', () => {
      const mockResReq = {
        send: sinon.spy(),
        status: () => mockResReq,
      };

      errorHandler({ message: 'Oooops, an error occured' }, mockResReq, mockResReq);
      expect(mockResReq.send.calledOnce).to.equal(true);
    });
  });
});
