import { expect,assert } from 'chai';

  describe('Should return "Please enter a number or an array of numbers"', () => {
    it('Should return "Please enter a number or an array of numbers" if invalid input is supplied', () => {
      expect(exercise.oddEven("fdghdf")).to.eql('Please enter a number or an array of numbers');
    });
  });
  describe('Should return "Please enter a number or an array of numbers"', () => {
    it('Should return "Please enter a number or an array of numbers" if invalid input is supplied', () => {
      expect(exercise.oddEven(["hfghh",3])).to.eql('Please enter a number or an array of numbers');
    });
  });

  describe('Should return an object if valid number is entered', () => {
    it('Should return an object', () => {
    assert.isObject(exercise.oddEven(6), 'result');
    });
  });

  describe('Should return an object if valid array is entered', () => {
    it('Should return an object', () => {
    assert.isObject(exercise.oddEven([5,8,10]), 'result');
    });
  });

  describe('Result Should have a property evenArray if a valid number is entered', () => {
    it('Should have a proprty evenArray', () => {
    assert.property(exercise.oddEven(6), 'evenArray');
    });
  });
  describe('Result Should have a property evenArray if a valid Array is entered', () => {
    it('Should have a proprty evenArray', () => {
    assert.property(exercise.oddEven([5,8,10]), 'evenArray');
    });
  });

  describe('Should have a property oddArray if a valid number is entered', () => {
    it('Should have a proprty oddArray', () => {
    assert.property(exercise.oddEven(6), 'oddArray');
    });
  });

  describe('Should have a property oddArray if a valid Array is entered', () => {
    it('Should have a proprty oddArray', () => {
    assert.property(exercise.oddEven([5,8,10]), 'oddArray');
    });
  });
  