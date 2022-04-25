'use strict';

import { expect } from 'chai';
import Hudu from '../src/index.js';

describe('Hudu', () => {
    describe('Hudu()', () => {
        describe('config', () => {
            it('should only accept an object', () => {
                expect(() => {
                    new Hudu(123);
                }).to.throw(/config must be an object/);

                expect(() => {
                    new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });
                }).to.not.throw();
            });

            it('should only contain allowed properties', () => {
                expect(() => {
                    new Hudu({
                        test: 'value',
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });
                }).to.throw(/config may only contain the following:/);

                expect(() => {
                    new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });
                }).to.not.throw();
            });

            it('should contain host property', () => {
                expect(() => {
                    new Hudu({
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });
                }).to.throw(/config must contain host value/);

                expect(() => {
                    new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });
                }).to.not.throw();
            });

            it('should contain key property', () => {
                expect(() => {
                    new Hudu({
                        host: 'example.com',
                    });
                }).to.throw(/config must contain key value/);

                expect(() => {
                    new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });
                }).to.not.throw();
            });
        });
    });

    describe('_sendApiRequest()', () => {
        describe('options', () => {
            it('should only accept an object', () => {
                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest(123);
                }).to.throw(/options must be an object/);

                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                    });
                }).to.not.throw();
            });

            it('should only contain allowed properties', () => {
                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        test: 'value',
                        method: 'get',
                        resource: 'companies',
                    });
                }).to.throw(/options may only contain the following:/);

                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                    });
                }).to.not.throw();
            });

            it('should contain method property', () => {
                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        resource: 'companies',
                    });
                }).to.throw(/options must contain method value/);

                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                    });
                }).to.not.throw();
            });

            it('should contain resource property', () => {
                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                    });
                }).to.throw(/options must contain resource value/);

                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                    });
                }).to.not.throw();
            });

            it('should only accept an object for params if supplied', () => {
                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                        params: 'value',
                    });
                }).to.throw(/config.params must be an object/);

                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                    });
                }).to.not.throw();

                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                        params: {},
                    });
                }).to.not.throw();
            });

            it('should only accept an object for body if supplied', () => {
                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                        body: 'value',
                    });
                }).to.throw(/config.body must be an object/);

                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                    });
                }).to.not.throw();

                expect(() => {
                    const huduInst = new Hudu({
                        host: 'example.com',
                        key: 'abcdefghijklmnopqrstuvwxyz',
                    });

                    huduInst._sendApiRequest({
                        method: 'get',
                        resource: 'companies',
                        body: {},
                    });
                }).to.not.throw();
            });
        });
    });

    describe('activity_logs()', () => {
        describe('method', () => {

        });

        describe('options', () => {

        });
    });
});
