'use strict';

import { expect } from "chai";
import Hudu from "../src/index.js";

describe('Hudu Module', () => {
    describe('apiConfig object', () => {
        it('should only accept an object', () => {
            expect(() => {
                new Hudu(123);
            }).to.throw(/API Config must be an object/);

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
                });
            }).to.throw();

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
            }).to.throw(/API Config must contain host value/);

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
            }).to.throw(/API Config must contain key value/);

            expect(() => {
                new Hudu({
                    host: 'example.com',
                    key: 'abcdefghijklmnopqrstuvwxyz',
                });
            }).to.not.throw();
        });
    });
});
